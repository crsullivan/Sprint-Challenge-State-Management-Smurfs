import React, { useState } from 'react';
import {connect, useDispatch} from 'react-redux';
import {postData} from '../actions/index';
import './App.css';

const SmurfForm = () => {

    const dispatch = useDispatch()
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        height: '',
        age: '',
    })

    const changeHandler = event => {
        setNewSmurf({
            ...newSmurf, [event.target.name] : event.target.value
        })
    }
    
        return (
            <div>
                <div>
                    <input type='text' name='name' placeholder='Name' onChange={changeHandler}/>
                    <input type='text' name='age' placeholder='Age' onChange={changeHandler}/>
                    <input type='text' name='height' placeholder='Height' onChange={changeHandler}/>
                    <button onClick={() => dispatch(postData(newSmurf))}>Submit</button>
                </div>
            </div>
        )
}
const mapStateToProps = (state) => {
    return {
        smurfData: state.smurfData,
        loading: state.loading,
        error: state.error
    };
};

export default connect(mapStateToProps, {postData})(SmurfForm)