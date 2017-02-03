import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import firebaseConfig from './firebaseConfig.js';
// import * as firebase from 'firebase';



// // Initialize Firebase
// const database = firebase
//   .initializeApp(firebaseConfig)
//   .database()
//   .ref();

// // "action" functions to update our firebase database
// const addTimestamp = data => database.child('timestamps').push(data, response => response);  
// const updateTimestamp = (id, data) => database.child(`timestamps/${id}`).update(data, response => response);  
// const actions = {  
//   addTimestamp,
//   updateTimestamp,
// };

// // const App = (props) => {  
// //   console.log('snapshot', props);
// //   const registerClick = (e) => {
// //   	console.log('clicked');
// //   }
// //   return (
// //   	<div className="myApp">
// // 	    <h1>My Prototype</h1>
// // 	    <button
// // 	    	onClick={registerClick}
// // 	    >
// // 	    	TimeStampMe
// // 	    </button>
// // 	    <p>{JSON.stringify(props)}</p>
// // 	   </div>
// //   );
// // }

// // database.on('value', snapshot => { 
// //   const store = snapshot.val();
// //   console.log('store', store);
// //   ReactDOM.render(
// //     <App 
// //     	{...actions}
// //     	{...store} 
// //     />,
// //     document.getElementById('root')
// //   );
// // });


ReactDOM.render(<App />, document.getElementById('root'));

// onClick={() => props.addTimestamp({name:'a click', when: Date.now()})}
