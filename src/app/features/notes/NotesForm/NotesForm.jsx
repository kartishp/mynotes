import React, { Component } from 'react'

class NotesForm extends Component {
    state={
        note: {
            title: '',
            body: '',
            date: '',
            createdBy: ''
        }
    };

    onFormSubmit = (evt) => {
        evt.preventDefault();
        this.props.createNote(this.state.note);
    }

    onInputChange = (evt) => {
        const newNote = this.state.note;
        newNote[evt.target.name] = evt.target.value;
        this.setState({
            note: newNote
        })
    }

  render() {
    const {handleCancel} = this.props;
    const {note} = this.state;

    return (
        <div className="row">
            <form onSubmit={this.onFormSubmit} className="col s12 card ">
                <div className="input-field col s12">
                    <input name="title" onChange={this.onInputChange} value={note.title} id="note_title" type="text" className="validate" />
                    <label for="note_title">Note Title</label>
                </div>
                <div class="input-field col s12">
                    <textarea name="body" onChange={this.onInputChange} value={note.body} id="note_textarea" className="materialize-textarea"></textarea>
                    <label for="note_textarea">Notes</label>
                </div>
                <div className="input-field col s4">
                    <input name="date" onChange={this.onInputChange} value={note.date} id="note_date" type="date" className="validate" />
                    <label for="note_date">Date</label>
                </div>
                <div className="input-field col s4">
                    <input name="createdBy" onChange={this.onInputChange} value={note.createdBy} id="createdBy" type="text" className="validate" />
                    <label for="createdBy">Created By</label>
                </div>
                <div className="input-field col s2">
                    <button class="col s12 waves-effect waves-light btn blue-grey darken-4 ten-mg-top radius">Add Note</button>
                </div>
                <div className="input-field col s2">
                    <button onClick={handleCancel} class="col s12 waves-effect waves-light btn blue-grey darken-4 ten-mg-top radius">Cancel</button>
                </div>
            </form>
        </div>    
    )
  }
}

export default NotesForm;