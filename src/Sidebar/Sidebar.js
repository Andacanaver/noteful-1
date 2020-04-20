import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import NotesContext from '../NotesContext';

//highlighted folder is selected
export default class Sidebar extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        },
        folders: []
    }

    static contextType = NotesContext

    render() {
    const { folders: [], notes: [] } = this.context
    return (
        <div className='folder__sidebar'>
            <ul>
                {this.context.folders.map(folder =>
                    <li key={folder.id}>
                        <Link 
                            className='FolderSidebar__folder-link'
                            to={`/folder/${folder.id}`}>
                            {folder.name}
                        </Link>
                    </li>
                )}
            </ul>
            <Link
                id='add-folder-link'
                to='/add-folder'
            > Add Folder
            </Link>
        </div>
    );
    }
}