import React, { Component } from 'react';
import NavBar from '../features/nav/NavBar/NavBar';
import NotesDashboard from '../features/notes/NotesDashboard/NotesDashboard';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <NotesDashboard />
      </div>
    );
  }
}

export default App;
