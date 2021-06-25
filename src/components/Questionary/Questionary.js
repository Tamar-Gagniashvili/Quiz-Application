import './Questionary.css'
import { connect } from 'react-redux';

import { useHistory } from 'react-router-dom';

const Questionary = (props) => {

    const history = useHistory();

    const submitHandler = (event) => {
        history.push('/results')
    }

    const questions = props.questions.map((item) => {

        // sort to make correnct answer in random position
        const answersRaw = [...item.incorrect_answers,item.correct_answer];
        answersRaw.sort()
        const answers = answersRaw.map((answer,index)=>{
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

    return (
        <div className="questionary">
            {questions}
            
            <div className="questionaryButton">
                <button onClick={submitHandler}>Submit</button>
            </div> 

        </div>
    )
}

export const mapStateToProps = (state) => {
    return {
        questions: state.questionary.questions
    }
}

export default connect(mapStateToProps)(Questionary);