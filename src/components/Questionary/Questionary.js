import './Questionary.css'

const Questionary = () => {
    return (
        <div className="questionary">
            <h3>Here is the Question</h3>
            <div className="form-check disabled">
                <input className="" type="radio" name="nm" value="option3" />
                <label className="" for="nm">
                    Answer 1
                </label>
            </div>
            <div className="form-check disabled">
                <input className="" type="radio" name="nm" value="option3" />
                <label className="" for="nm">
                    Answer 2
                </label>
            </div>
            <div className="form-check disabled">
                <input className="" type="radio" name="nm" value="option3" />
                <label className="" for="nm">
                    Answer 3
                </label>
            </div>
            <div className="form-check disabled">
                <input className="" type="radio" name="nm" value="option3" />
                <label className="" for="nm">
                    Answer 4
                </label>
            </div>
            <div className="questionaryButton">
                <button>Submit</button>
            </div>

        </div>
    )
}

export default Questionary;