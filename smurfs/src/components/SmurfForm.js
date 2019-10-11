import React, { useState } from 'react';
import {connect} from 'react-redux';
import {postData} from '../actions/index';
import './App.css';
import axios from 'axios'; 

const SmurfForm = ({postData}) => {

    // useEffect (() => {
    //     props.postData();
    // }, [])
    
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })

    const changeHandler = event => {
        setNewSmurf({
            ...newSmurf, [event.target.name] : event.target.value,
            id: Date.now()
        })
    }
    

    const handleSubmit = event => {
        event.preventDefault(); 
        const newSmurf = ({
            ...setNewSmurf,
            id: Date.now()
        })
        postData(newSmurf)
        setNewSmurf({
            name: '',
            age: '',
            height: ''
        })
       
       
       
       
        // axios
        // .post('http://localhost:3333/smurfs', newSmurf)
        // .then( result => {
        //       setNewSmurf(result.data);
        //     })
        //     .catch(error => {
        //         console.log(error)
        //         alert("Username already exists please login to continue", error)
        //     })
            
            
    }

    

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='name' value={newSmurf.name} placeholder='Name' onChange={changeHandler}/>
                    <input type='text' name='age' value={newSmurf.age} placeholder='Age' onChange={changeHandler}/>
                    <input type='text' name='height' value={newSmurf.height} placeholder='Height' onChange={changeHandler}/>
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