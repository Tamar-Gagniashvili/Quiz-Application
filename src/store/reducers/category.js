import * as actionTypes from '../actionTypes';


const initialState = {
    error: null,
    loading: false,
    categories: [],
}

const getCategoryStart = (state, action) => {
    return {
        ...state,
        loading: true,
        error: null
    }
}

const getCategorySuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        error: false,
        categories: action.payload
    }
}

const getCategoryFail = (state, action) => {
    return {
        ...state,
        error: action.error,
        loading: false
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CATEGORY_START:
            return getCategoryStart(state, action);
        case actionTypes.GET_CATEGORY_SUCCESS:
            return getCategorySuccess(state, action);
        case actionTypes.GET_CATEGORY_FAIL:
            return getCategoryFail(state, action);
        default:
            return state;
    }
}

export default reducer;