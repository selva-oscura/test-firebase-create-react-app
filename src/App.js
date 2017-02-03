import React, { Component} from 'react';
import uuid from 'uuid';
import * as firebase from 'firebase';
import firebaseConfig from './firebaseConfig.js';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.addATimestamp = this.addATimestamp.bind(this);
		this.updateATimestamp = this.updateATimestamp.bind(this);
		this.deleteATimestamp = this.deleteATimestamp.bind(this);
		this.state = {
			timestamps: {
				123456789:{
					id: 123456789,
					what: "stateData",
					when: Date.now(),
				},
				344234567823456953:{
					id: 344234567823456953,
					what: "moreStateData",
					when: Date.now()
				},
			}
		};
	}
	componentDidMount(){
		// Initialize Firebase
		const database = firebase
			.initializeApp(firebaseConfig)
			.database();
		const timestampRef = database.ref('timestamps');
		// sync state to firebase database
		timestampRef.on('value', snapshot => { 
		  this.setState({
		  	timestamps: snapshot.val(),
		  });
		});
	}
	addATimestamp(){
		let newId = uuid.v4();
		let newData = {
			id: 	newId,
			what: 'added text by clicking TimeStampMe',
			when: Date.now(),
		}
		firebase.database().ref('timestamps/'+newData.id).set(newData, response => response);
	}
	updateATimestamp(e){
		let timestamp = Date.now();
		firebase.database().ref('timestamps/'+e.target.id).update({when:timestamp})
	}
	deleteATimestamp(e){
		firebase.database().ref('timestamps/'+e.target.id).remove(response => response);
	}
	render(){
		return(
			<div className="App">
				<h1>Hello Firebase</h1>
		    <button
		    	onClick={this.addATimestamp}
		    >
		    	TimeStampMe
		    </button>
				<p>{JSON.stringify(this.state.timestamps)}</p>
				{Object.keys(this.state.timestamps).map((timestamp, i) => <Timestamp key={i} id={i} timestamp={this.state.timestamps[timestamp]} updateATimestamp={this.updateATimestamp} deleteATimestamp={this.deleteATimestamp}/>)}
			</div>
		)
	}
}

const Timestamp = ({timestamp, updateATimestamp, deleteATimestamp}) => {
	const date = new Date(timestamp.when).toLocaleString();
	return(
		<h2>
			<button
				className="delete-button"
				onClick={deleteATimestamp}
				id={timestamp.id}
			>
				deleteMe
			</button>
			<button
				className="update-button"
				onClick={updateATimestamp}
				id={timestamp.id}
			>
				updateMe
			</button>
			{timestamp.what}, <br />
			{date}
		</h2>
	)
};

export default App;
