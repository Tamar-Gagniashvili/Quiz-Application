import * as actionTypes from '../actionTypes';
import axios from 'axios';


export const getCategoryStart = () => {
    return {
        type: actionTypes.GET_CATEGORY_START
    }
}

export const getCategorySuccess = (payload) => {
    return {
        type: actionTypes.GET_CATEGORY_SUCCESS,
        payload: payload
    }
}

export const getCategoryFail = () => {
    return {
        type: actionTypes.GET_CATEGORY_FAIL
    }
}


export const getCategory = () => {
    return dispatch => {
        dispatch(getCategoryStart());

        axios.get(`https://opentdb.com/api_category.php`)
            .then(response => {
                dispatch(getCategorySuccess(response.data.trivia_categories));
            })
            .catch(err => {
                console.log(err);
                dispatch(getCategoryFail(err))
            })
    }
}


