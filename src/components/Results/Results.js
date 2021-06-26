import './Results.css'
import { NavLink } from 'react-router-dom';


const Results = () => {
    return (
        <div className="results">
            <h1>Your Score : {localStorage.getItem('score')}</h1>
            <h2>Best Score:  {localStorage.getItem('bestScore')}</h2>
            <div className="resultsButon">
                <NavLink to='/options'>Restart</NavLink>
            </div>
        </div>
    )
}

export default Results