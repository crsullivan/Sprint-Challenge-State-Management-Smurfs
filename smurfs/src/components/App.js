import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../actions/index';
import SmurfForm from './SmurfForm'
import './App.css';
import axios from 'axios';

const App = (props) => {
  
  useEffect (() => {
    props.fetchData();
}, [])

console.log(props.smurfData)
if(props.loading) {
    
    return <h3>Loading Data...</h3>
}
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm />
        <div>WOOOO!!</div>
        <div>
          {props.smurfData.map(data => (
            <>
              <h1>{data.name}</h1>
              <h2>{data.age}</h2>
              <p>{data.height}</p>
              
            </>
          ))}
        </div>
      </div>
    );
  }


  const mapStateToProps = (state) => {
    return {
        smurfData: state.smurfData,
        loading: state.loading,
        error: state.error
    };
};

export default connect(mapStateToProps, {fetchData})(App)