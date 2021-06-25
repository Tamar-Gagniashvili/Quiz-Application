import './Welcome.css'
import QuizTime from '../../assets/quiz-time.jpg';

const Welcome = () => {
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
                        <img src={QuizTime} alt="Quiz-Time Photo" />
                    </div>
                </div>
                <div className="buttonWrapper">
                    <button className="welcomeButton">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Welcome