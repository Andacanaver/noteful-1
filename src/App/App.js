import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import MainSidebar from '../MainSidebar/MainSidebar';
import MainMain from '../MainMain/MainMain';
import FolderSidebar from '../FolderSidebar/FolderSidebar';
import FolderMain from '../FolderMain/FolderMain';
import dummyStore from '../dummy-store';

class App extends Component {
  state = {
    notes: [],
    folders: []
  };

  renderSidebars() {
    return(
      <div className='sidebar'>
        <Sidebar>
          <Route exact path='/' component={MainSidebar} />
          <Route path='/folder' component={FolderSidebar} />
        </Sidebar>
      </div>
    )
  }

  renderMain() {
    return (
      <div className='main'>
        <Main>
          <Route exact path='/' component={MainMain} />
          <Route path='/folder' component={FolderMain} />
        </Main>
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