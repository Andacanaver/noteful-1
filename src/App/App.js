import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import MainNotes from '../MainNotes/MainNotes';
import Sidebar from '../Sidebar/Sidebar';
import NoteSidebar from '../NoteSidebar/NoteSidebar';
import NoteComplete from '../NoteComplete/NoteComplete';
import dummyStore from '../dummy-store';
import {getNotesForFolder, findNote, findFolder } from '../notehelpers';
import './App.css';

class App extends Component {
  state = {
    notes: [],
    folders: []
  };

  componentDidMount() {
    // fake date loading from API call
    setTimeout(() => this.setState(dummyStore), 600);
  }

  renderSidebars() {
    const {notes, folders} = this.state;
    return(
      <div className='sidebar'>
        {['/', '/folder/:folderId'].map(path => (
          <Route 
          exact
          path={path}
          render= {routeProps => (
            <Sidebar 
            folders={folders}
            notes={notes}
            {...routeProps}
             />
          )} 
        />
        ))}
{/* I know this is rendering the Note specific Sidebar, but I dont understand how */}
        <Route 
            path='/notecomplete/:noteId'
            render={routeProps => {
              const {noteId} = routeProps.match.params;
              const note = findNote(notes, noteId) || {};
              const folder = findFolder(folders, note.folderId);
              return <NoteSidebar {...routeProps} folder={folder} />;
            }} />
      </div>
    )
  }

  //renders the "main" components - all of the notes in one place. 
  renderMain() {
    const {notes, folders} = this.state;
    return (
      <div className='main'>
        {['/', '/folder/:folderId'].map(path => (
          <Route 
            exact
            key={path}
            path={path}
            render={routeProps => {
              const {folderId} = routeProps.match.params;
              const notesForFolder = getNotesForFolder(
                notes,
                folderId
              );
              return (
                <MainNotes 
                  {...routeProps}
                  notes={notesForFolder} 
                />
              );
            }} 
          />
        ))}
{/* Renders the complete note, with the content inside -- used in the Note component */}
        <Route 
          path='/notecomplete/:noteId'
          render={routeProps => {
            const {noteId} = routeProps.match.params;
            const note = findNote(notes, noteId);
            return <NoteComplete {...routeProps} note={note} />;
          }} />  
      </div>
    )
  }

  render() {
    return (
      <div className='App'>
        <nav className='App__sidebars'> {this.renderSidebars()} </nav>
        <header className='App__header'>
            <h1>
              <Link to='/'>Noteful</Link>
            </h1>
        </header>
        <main className='App__main'> {this.renderMain()} </main>
      </div>
    )
  }

}

export default App;