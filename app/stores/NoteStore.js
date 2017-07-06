import uuid from 'uuid';
import NoteActions from '../actions/NoteActions';

export default class NoteStore {
    constructor() {

        this.bindActions(NoteActions);

        this.notes = [
            {
                id: uuid.v4(),
                task: 'Finish this project'
            },
            {
                id: uuid.v4(),
                task: 'Do laundry'
            }
        ];
    }

    create(note) {
        console.log('Create note', note);
    }

    update(updatedNote) {
        console.log('Update note', updatedNote);
    }

    delete(id){
        console.log('Deleted note', id);
    }

}