import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

//highlighted folder is selected
export default function Sidebar(props) {
    return (
        <div className='folder__sidebar'>
            <ul>
                {props.folders.map(folder =>
                    <li key={folder.id}>
                        <Link 
                            className='FolderSidebar__folder-link'
                            to={`/folder/${folder.id}`}>
                            {folder.name}
                        </Link>
                    </li>
                )}
            </ul>
            {/* <button>Go Back</button> */}
        </div>
    );
}

Sidebar.defaultProps = {
    folders: []
}