import {LOAD_DATA, LOAD_SUCCESS, LOAD_FAILURE, SAVE_SMURF, SAVE_SUCCESS, SAVE_FAILURE} from '../actions/index'

const initialState = {
    smurfData: [
        {
            name: '',
            age: 0,
            height: '',
            id: 0
        }
    ],
    loading: false,
    error: ''
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case LOAD_DATA:
            return{
                ...state,
                loading: true,
                error: ''
            }
        case LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                smurfData: action.payload
            }
        case LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case SAVE_SMURF:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case SAVE_SUCCESS: 
            return {
                ...state,
                loading: false,
                smurfData: action.payload,
                error: ''
            }
        case SAVE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export default reducer;