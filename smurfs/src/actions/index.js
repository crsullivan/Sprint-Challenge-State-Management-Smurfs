import axios from 'axios';

export const LOAD_DATA = 'LOAD_DATA';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_FAILURE ='LOAD_FAILURE';

export const fetchData = () => (dispatch) => {
    dispatch({type: LOAD_DATA})
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => dispatch({ type: LOAD_SUCCESS, payload: res.data}))
    .catch(err => dispatch({ type: LOAD_FAILURE, payload: err.response}))
}

export const SAVE_SMURF = 'SAVE_SMURF';
export const SAVE_SUCCESS = 'SAVE_SUCCESS';
export const SAVE_FAILURE = 'SAVE_FAILURE';

export const postData = (smurfInfo) => (dispatch) => {
    dispatch({type: SAVE_SMURF})
    axios
    .post('http://localhost:3333/smurfs', smurfInfo) 
    .then(res => dispatch({type: SAVE_SUCCESS, payload: res.data}))
        .catch(err => dispatch({ type: SAVE_FAILURE, payload: err.response}))
}
