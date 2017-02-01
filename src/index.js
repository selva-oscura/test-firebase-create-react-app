import React from 'react';
import ReactDOM from 'react-dom';
import firebaseConfig from './firebaseConfig.js';
import * as firebase from 'firebase';


// Initialize Firebase
const fire = firebase
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

fire.on('value', snapshot => { 
  const store = snapshot.val();
  ReactDOM.render(
    <App {...store} />,
    document.getElementById('root')
  );
});


ReactDOM.render(<App />, document.getElementById('root'));
