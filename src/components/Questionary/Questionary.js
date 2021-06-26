import './Questionary.css'
import { connect } from 'react-redux';

import { NavLink, useHistory } from 'react-router-dom';
import { decodeHtml } from '../../utilities/encodingHelper';


const Questionary = (props) => {

    const history = useHistory();

    const submitHandler = () => {
        // Get all checked inputs
        const inputs = document.querySelectorAll('input:checked')

        // count how many is correct
        let result = 0;
        inputs.forEach(input => {
            if (input.value === getCorrectAnswer(input.name))
                result++;
        });

        // save data in localStorage
        localStorage.setItem('score', result);

        const bestScore = localStorage.getItem('bestScore');
        if (bestScore == null || bestScore < result) {
            localStorage.setItem('bestScore', result);
        }

        history.push('/results')
    }
    /*
    * retrives correnct answer by question
    */
    function getCorrectAnswer(question) {
        let correctAnswer;
        props.questions.forEach(element => {
            if (element.question === question) {
                correctAnswer = element.correct_answer;
            }
        });
        return correctAnswer
    }



    const questions = props.questions.map((item) => {
        // unite wrong and correct answers
        const answersRaw = [...item.incorrect_answers, item.correct_answer];
        // sort by lexicon to make correct answer in random position
        answersRaw.sort()

        const answers = answersRaw.map((answer, index) => {
            return <div className="form-check disabled">
                <input type="radio" name={item.question} value={answer} />
                <label for={item.question}>
                    {answer}
                </label>
            </div>
        })

        return (
            <div>
                <h3>{decodeHtml(item.question)}</h3>
                {answers}
            </div>
        )
    })


    // check for question array being empy
    let errorMessage = ""
    if (questions.length === 0 && errorMessage === "")
        errorMessage = "No questions found on this combination"



    return (
        <div className="questionary">
            {
                errorMessage != "" ? (
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
                    )
            }
        </div>
    )
}

export const mapStateToProps = (state) => {
    return {
        questions: state.questionary.questions
    }
}

export default connect(mapStateToProps)(Questionary);