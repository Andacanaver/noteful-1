import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import MainNotes from '../MainNotes/MainNotes';
import Sidebar from '../Sidebar/Sidebar';
import NoteSidebar from '../NoteSidebar/NoteSidebar';
import NoteComplete from '../NoteComplete/NoteComplete';
import NotesContext from '../NotesContext';
import {getNotesForFolder, findNote, findFolder } from '../notehelpers';
import './App.css';

class App extends Component {
  state = {
    notes: [],
    folders: []
  };

  //refactor this when we have made the API call so it finds the deleted note
  //by id and then updates the array without the deleted note  
  deleteNote = note => {
    this.setState({
      notes: [...this.state.notes, note]
    })
  }

  componentDidMount() {
    // fake date loading from API call
    //setTimeout(() => this.setState(dummyStore), 600);
    Promise.all([
      fetch('http://localhost:9090/folders'),
      fetch('http://localhost:9090/notes')
    ], {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(([notesRes, foldersRes]) => {
      if (!notesRes.ok) {
        throw new Error(notesRes.status)
      } else if (!foldersRes.ok) {
          throw new Error (foldersRes.status)
        }

      return Promise.all([notesRes.json(), foldersRes.json()]);
    })
    .then(([notes, folders]) => {
      this.setState({ notes, folders });
    })
    .catch(error => {
      console.log({error});
    });
  }

  renderSidebars() {
    return(
      <div className='sidebar'>
        {['/', '/folder/:folderId'].map(path => (
          <Route 
          exact
          path={path}
          component={Sidebar} 
        />
        ))}
{/* I know this is rendering the Note specific Sidebar, but I dont understand how 
I only want to render this component when I click on a specific note */}
        <Route 
            path='/notecomplete/:noteId'
            component={NoteSidebar} />
      </div>
    )
  }

  //renders the "main" components - all of the notes in one place. 
  renderMain() {
    return (
      <div className='main'>
        {['/', '/folder/:folderId'].map(path => (
          <Route 
            exact
            key={path}
            path={path}
            component={MainNotes} 
          />
        ))}
{/* Renders the complete note, with the content inside -- used in the Note component */}
        <Route 
          path='/notecomplete/:noteId'
          component={NoteComplete} /> 
      </div>
    )
  }

  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.deleteNote,
    };
    return (
      <NotesContext.Provider value={contextValue}>
      <div className='App'>
        <nav className='App__sidebars'> {this.renderSidebars()} </nav>
        <header className='App__header'>
            <h1>
              <Link to='/'>Noteful</Link>
            </h1>
        </header>
        <main className='App__main'> {this.renderMain()} </main>
      </div>
      </NotesContext.Provider>
    );
  }
}

export default App;