
import * as actionTypes from '../actionTypes';
import axios from 'axios';


export const getQuestionaryStart = () => {
    return {
        type: actionTypes.GET_QUESTIONARY_START
    }
}

export const getQuestionarySuccess = (payload) => {
    return {
        type: actionTypes.GET_QUESTIONARY_SUCCESS,
        payload: payload
    }
}

export const getQuestionaryFail = () => {
    return {
        type: actionTypes.GET_QUESTIONARY_FAIL
    }
}

export const getQuestionary = () => {
    return dispatch => {
        dispatch(getQuestionaryStart());

        axios.get(`https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple`)
            .then(response => {
                console.log(response)
                dispatch(getQuestionarySuccess(response.data))
            })
            .catch(err => {
                console.log(err);
                dispatch(getQuestionaryFail(err))
            })
    }
}