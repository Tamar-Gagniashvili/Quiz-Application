import './Options.css';
import * as actions from '../../store/index';
import { connect } from 'react-redux';
import { useEffect } from 'react';


const Options = (props) => {

    const { onGet } = props;

    useEffect(function () {
        onGet();
    }, [onGet])


    const categoryOptions = props.categories.map((category) => {
        return <option value={category.id}>{category.name}</option>
    })


    return (
        <div className="optionsWrapper">
            <h1>
                Choose the Sections
            </h1>
            <form>
                <div className="formWrapper">
                    <label>Questions:</label>
                    <input type="number" name="trivia_amount" className="formControl" min="1" max="50" />
                </div>

                <div className="formWrapper">
                    <label>Category:</label>
                    <select name="trivia_category" className="formControl">
                        <option value='any'>Any Category</option>
                        {categoryOptions}
                    </select>
                </div>

                <div className="formWrapper">
                    <label>Difficulty:</label>
                    <select name="trivia_difficulty" className="formControl">
                        <option value="any">Any Difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>

                <div className="formWrapper">
                    <label>Type:</label>
                    <select name="trivia_type" className="formControl">&gt;
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


export const mapStateToProps = (state) => {
    return {
        error: state.category.error,
        loading: state.category.loading,
        categories: state.category.categories
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        onGet: () => dispatch(actions.getCategory())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Options);