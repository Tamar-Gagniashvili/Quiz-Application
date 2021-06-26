import './Results.css'
import { useHistory } from 'react-router-dom';


const Results = () => {
    const history = useHistory();

    const submitHandler = (event) => {
        history.push('/options')
    }
    return (
        <div className="results">
            <h1>Your Score : {localStorage.getItem('score')}</h1>
            <h2>Best Score:  {localStorage.getItem('bestScore')}</h2>
            <div className="resultsButon">
                <button onClick={submitHandler}>Restart</button>
            </div>
        </div>
    )
}

export default Results