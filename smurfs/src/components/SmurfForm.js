import React, { useState } from 'react';
import {connect} from 'react-redux';
import {postData} from '../actions/index';
import './App.css';
import axios from 'axios';

const SmurfForm = (props) => {

    // useEffect (() => {
    //     props.postData();
    // }, [])
    
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        height: '',
        age: '',
        id: Date.now()
    })

    const changeHandler = event => {

        event.preventDefault();
        setNewSmurf({
            ...newSmurf, [event.target.name] : event.target.value
        })
    }
    

    const handleSubmit = event => {
        event.preventDefault();
        axios
        .post('http://localhost:3333/smurfs', newSmurf)
        .then( result => {
              setNewSmurf(result.data);
            })
            .catch(error => {
                console.log(error)
                alert("Username already exists please login to continue", error)
            })
            
            
    }

    console.log(props)
    if(props.loading) {
        
        return <h3>Loading Data...</h3>
    }

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='name' placeholder='Name' onChange={changeHandler}/>
                    <input type='text' name='age' placeholder='Age' onChange={changeHandler}/>
                    <input type='text' name='height' placeholder='Height' onChange={changeHandler}/>
                    <button type="submit">Submit</button>
                </form>
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