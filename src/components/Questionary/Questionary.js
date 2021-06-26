import './Questionary.css'
import { connect } from 'react-redux';
import { useState } from 'react';

import { NavLink, useHistory } from 'react-router-dom';



const Questionary = (props) => {

    const history = useHistory();

    let errorMessage = ""

    function getCorrectAnswer(question) {
        let correctAnswer;
        props.questions.forEach(element => {
            if (element.question === question) {
                correctAnswer = element.correct_answer;
            }
        });
        return correctAnswer
    }

    const submitHandler = (event) => {

        const inputs = document.querySelectorAll('input:checked')
        let result = 0;
        inputs.forEach(input => {
            if (input.value === getCorrectAnswer(input.name)) {
                result++;
            }
        });
        localStorage.setItem('score', result);
        const bestScore = localStorage.getItem('bestScore');
        if (bestScore == null || bestScore < result) {
            localStorage.setItem('bestScore', result);
        }

        history.push('/results')
    }





    const questions = props.questions.map((item) => {
        // sort to make correnct answer in random position
        const answersRaw = [...item.incorrect_answers, item.correct_answer];
        answersRaw.sort()
        const answers = answersRaw.map((answer, index) => {
            return <div className="form-check disabled">
                <input className="" type="radio" name={item.question} value={answer} />
                <label className="" for={item.question}>
                    {answer}
                </label>
            </div>
        })
        return (
            <div>
                <h3>{item.question}</h3>
                {answers}
            </div>
        )
    })


    if (questions.length === 0 && errorMessage === "") {
        errorMessage = "No questions found on this combination"
    }


    return (
        <div className="questionary">
            {errorMessage != "" ? (
                <div className="backErrorWrapper">
                    {errorMessage}
                    <NavLink to="/options" className="returnButton">GO BACK</NavLink>
                </div>
            )
                :
                (
                    <form name="form1">
                        {questions}

                        <div className="questionaryButton">
                            <button onClick={submitHandler}>Submit</button>
                        </div>
                    </form>
                )}
        </div>
    )
}

export const mapStateToProps = (state) => {
    return {
        questions: state.questionary.questions
    }
}

export default connect(mapStateToProps)(Questionary);