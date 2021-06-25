import * as actionTypes from '../actionTypes';


const initialState = {
    error: null,
    loading: false,
    questions: []
}

const getQuestionaryStart = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    }
}

const getQuestionarySuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        error: false,
        questions: action.payload
    }
}

const getQuestionaryFail = (state, action) => {
    return {
        ...state,
        error: action.error,
        loading: false
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_QUESTIONARY_START:
            return getQuestionaryStart(state, action);
        case actionTypes.GET_QUESTIONARY_SUCCESS:
            return getQuestionarySuccess(state, action);
        case actionTypes.GET_QUESTIONARY_FAIL:
            return getQuestionaryFail(state, action);
        default:
            return state
    }
}

export default reducer;