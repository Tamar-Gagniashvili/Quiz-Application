import './Options.css';



const Options = () => {
    return (
        <div className="optionsWrapper">
            <h1>
                Choose the Sections
            </h1>
            <form>
                <div className="formWrapper">
                    <label>Questions:</label>
                    <input type="number" name="trivia_amount" class="formControl" min="1" max="50" />
                </div>

                <div className="formWrapper">
                    <label>Category:</label>
                    <select name="trivia_category" class="formControl">
                        <option value="any">Any Category</option>
                        <option value="9">General Knowledge</option>
                        <option value="10">Entertainment: Books</option>
                        <option value="11">Entertainment: Film</option>
                        <option value="12">Entertainment: Music</option>
                        <option value="13">Entertainment: Musicals &amp; Theatres</option>
                    </select>
                </div>

                <div className="formWrapper">
                    <label>Difficulty:</label>
                    <select name="trivia_difficulty" class="formControl">
                        <option value="any">Any Difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>

                <div className="formWrapper">
                    <label>Type:</label>
                    <select name="trivia_type" class="formControl">&gt;
                        <option value="any">Any Type</option>
                        <option value="multiple">Multiple Choice</option>
                        <option value="boolean">True / False</option>
                    </select>
                </div>

                <div className="formWrapper">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Options