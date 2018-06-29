import React, { Component } from 'react';
import cuid from 'cuid';
import NotesForm from '../NotesForm/NotesForm';
import NotesList from '../NotesList/NotesList';

const noteDashboard = [
  {
    id: 1,
    title: 'Tp',
    body: 'Time Pass',
    date: '29 July',
    createdBy: 'Kartish'
  }
]

class NotesDashboard extends Component {
  state = {
    note: noteDashboard,
    isOpen: false,
  }

  handleFormOpen = () => {
    this.setState({
      isOpen: true
    })
  }

  handleCreateNote = newNote => {
    newNote.id = cuid();
    const updatedNote = [...this.state.note, newNote];
    this.setState({
      note: updatedNote,
      isOpen: false 
    })
  }

  handleCancel = () => {
    this.setState({
      isOpen: false
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <button onClick={this.handleFormOpen} class="col s12 waves-effect waves-light btn amber accent-4 twenty-mg-top">Create Note</button>
          </div>
        </div> 
        {this.state.isOpen && <NotesForm createNote={this.handleCreateNote}/>} 
        <div className="row">
          <div className="col s12">
            {this.state.note.map((perNote) => (
              <NotesList key={perNote.key} note={perNote} />
            ))}
          </div>
        </div>            
      </div>
    )
  }
}

export default NotesDashboard;
