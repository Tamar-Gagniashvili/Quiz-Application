import './Welcome.css'
import QuizTime from '../../assets/quiz-time.jpg';
import { useHistory } from 'react-router-dom';

const Welcome = () => {

    const history = useHistory();

    const submitHandler = (event) => {
        history.push('/options')
    }
    return (
        <div className="welcomeWrapper">
            <div className="box">
                <div className="contentWrapper">
                    <div className="welcomeText">
                        <h1>
                            Welcome to the Quiz 𓀉
                        </h1>

                    </div>
                    <div className="welcomePhoto">
                        <img src={QuizTime} alt="Quiz-Time" />
                    </div>
                </div>
                <div className="buttonWrapper">
                    <button onClick={submitHandler} className="welcomeButton">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Welcome