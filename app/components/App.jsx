import React, { Component } from 'react';
import Notes from './Notes';
import uuid from 'uuid';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';
import Lanes from './Lanes';
import LaneActions from '../actions/LaneActions';

const App = ({LaneActions, lanes}) => {
	const addLane = () => {
		LaneActions.create({
			id: uuid.v4(),
			name: 'New lane'
		});
	};

	return (
		<div>
			<button className="add-lane" onClick={addLane}>+</button>
			<Lanes lanes={lanes} />
		</div>
	);
};

//export default App;
export default connect(({lanes}) => ({
	lanes
}), {
	LaneActions
})(App)