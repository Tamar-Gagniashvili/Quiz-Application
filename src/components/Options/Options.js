import './Options.css';
import * as actions from '../../store/index';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Options = (props) => {

    const history = useHistory();

    const [inputData, setInputData] = useState({
        amount: 10,
        category: 0,
        difficulty: 'any',
        type: 'any'
    })

    const [errorMessage, setErrorMessage] = useState('')

    const { onGet } = props;

    useEffect(function () {
        onGet();
    }, [onGet])



    const changeHandler = (event) => {
        const { name, value } = event.target;
        setInputData({ ...inputData, [name]: value })
    }

    const submitHandler = () => {
        if (inputData.amount < 1 || inputData.amount > 50) {
            setErrorMessage('Please, choose the number from 1 to 50')
        }
        else {
            props.onGetQuestions(inputData)
            history.push('/questionary')
            setErrorMessage('')
        }
    }

    const categoryOptions = props.categories.map((category) => {
        return <option key={category.id} value={category.id}>{category.name}</option>
    })


    return (
        <div className="optionsWrapper">
            <h1>
                Choose the Sections
            </h1>
            <form>
                <div className="formWrapper">
                    <label>Questions:</label>
                    <input type="number" name="amount" className="formControl" min="1" max="50" value={inputData.amount} onChange={changeHandler} />
                </div>

                <div className="formWrapper">
                    <label>Category:</label>
                    <select name="category" value={inputData.category} onChange={changeHandler} className="formControl">
                        <option value="0" >Any Category</option>
                        {categoryOptions}
                    </select>
                </div>

                <div className="formWrapper">
                    <label>Difficulty:</label>
                    <select name="difficulty" className="formControl" value={inputData.difficulty} onChange={changeHandler}>
                        <option value="any">Any Difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>

                <div className="formWrapper">
                    <label>Type:</label>
                    <select name="type" className="formControl" value={inputData.type} onChange={changeHandler}>&gt;
                        <option value="any">Any Type</option>
                        <option value="multiple">Multiple Choice</option>
                        <option value="boolean">True / False</option>
                    </select>
                </div>

                <div className="formWrapper">
                    <button type="button" onClick={submitHandler}>Submit</button>
                </div>
            </form>
            {errorMessage !== '' ? <p>{errorMessage}</p> : null}
        </div>
    )
}


export const mapStateToProps = (state) => {
    return {
        error: state.category.error,
        loading: state.category.loading,
        categories: state.category.categories,
        questions: state.questionary.questions
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        onGet: () => dispatch(actions.getCategory()),
        onGetQuestions: (data) => dispatch(actions.getQuestionary(data)),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Options);