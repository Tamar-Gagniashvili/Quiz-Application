
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


// const data = {
//     amount: 200,
//     category: 13,
//     difficulty: hard,
//     type: multiple
// }

export const getQuestionary = (data) => {
    return dispatch => {
        dispatch(getQuestionaryStart());
 
        let URL = `https://opentdb.com/api.php?amount=${data.amount}`;
        if(data.category !== 0){
            URL += `&category=${data.category}`
        }
        if(data.difficulty !== 'any'){
            URL += `&difficulty=${data.difficulty}`
        }
        if(data.type !== 'any'){
            URL += `&type=${data.type}`
        }

        axios.get(URL)
            .then(response => {
                dispatch(getQuestionarySuccess(response.data.results))
            })
            .catch(err => {
                console.log(err);
                dispatch(getQuestionaryFail(err))
            })
    }
}