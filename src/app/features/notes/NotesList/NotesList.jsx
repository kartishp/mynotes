import React, { Component } from 'react'

class NotesList extends Component {
  render() {
    const {note} = this.props;
    return (
      <div className="row">
        <div className="col s12">
          <div className="card blue-grey darken-4">
            <div className="card-content white-text">
              <span className="card-title">{note.title}</span>
              <p>{note.body}</p>
            </div>
            <div className="card-action">
              <span className="btn amber accent-4 push"><i className="material-icons left">account_circle</i>{note.createdBy}</span>
              <span className="btn amber accent-4 push"><i className="material-icons left">access_time</i>{note.date}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NotesList;