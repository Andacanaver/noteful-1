import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function FolderSidebar(props) {
    return (
        <div className='folder__sidebar'>
            <ul>
                {props.folders.map(folder =>
                    <li key={folder.id}>
                        <NavLink 
                            className='FolderSidebar__folder-link'
                            to={`/folder/${folder.id}`}>
                            <span> {props.notes, folder.id} </span>
                        </NavLink>
                    </li>)}
            </ul>

        </div>
    );
}

export default FolderSidebar