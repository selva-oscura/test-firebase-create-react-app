import React, { Component} from 'react';
import uuid from 'uuid';
import * as firebase from 'firebase';
import firebaseConfig from './firebaseConfig.js';

class App extends Component {
	constructor(){
		super();
		this.addATimestamp = this.addATimestamp.bind(this);
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
		timestampRef.on('value', snapshot => { 
		  this.setState({
		  	timestamps: snapshot.val(),
		  });
		});
	}
	addATimestamp(){
		console.log('clicked', this);
		let newId = uuid.v4();
		let newData = {
			id: 	newId,
			what: 'added text by clicking TimeStampMe',
			when: Date.now(),
		}
		firebase.database().ref('timestamps/'+newData.id).set(newData, response => response);
	}
	render(){
		console.log('this.state.timestamps', this.state.timestamps)
		return(
			<div className="App">
				<h1>Hello Firebase</h1>
		    <button
		    	onClick={this.addATimestamp}
		    >
		    	TimeStampMe
		    </button>
				<p>{JSON.stringify(this.state.timestamps)}</p>
				{Object.keys(this.state.timestamps).map((timestamp, i) => <Timestamp key={i} id={i} timestamp={this.state.timestamps[timestamp]} />)}
			</div>
		)
	}
}

const Timestamp = ({timestamp}) => (
	<h2>
		{timestamp.what}, {timestamp.when}
	</h2>
);

export default App;