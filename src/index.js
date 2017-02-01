import React from 'react';
import ReactDOM from 'react-dom';
import firebaseConfig from './firebaseConfig.js';
import * as firebase from 'firebase';

// Initialize Firebase
const fb = firebase  
  .initializeApp(firebaseConfig)
  .database()
  .ref();

const App = (props) => {  
  console.log('snapshot', props);
  return (
  	<div className="myApp">
	    <h1>My Prototype</h1>
	    <p>{JSON.stringify(props)}</p>
	   </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
