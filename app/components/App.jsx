import React, { Component } from 'react';
import Notes from './Notes';
import uuid from 'uuid';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [
				{
					id: uuid.v4(),
					task: 'Finish tutorial'
				},
				{
					id: uuid.v4(),
					task: 'Do laundry'
				}
			]
		};
	}

	addNote = () => {
		this.setState({
			notes: this.state.notes.concat([{
				id: uuid.v4(),
				task: 'New Task'
			}])
		});
	}

	deleteNote = (id, e) => {
		e.stopPropagation();
		this.setState({
			notes: this.state.notes.filter(note => note.id !== id)
		});
	}

	render() {
		const {notes} = this.state;

		return (
			<div>
				<button onClick={this.addNote}>+</button>
				<Notes notes={notes}  onDelete={this.deleteNote} />
			</div>
		);
	}
}

export default App;