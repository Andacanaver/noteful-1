import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MainSidebar(props) {
    return (
        <div className='main__sidebar'>
            <div className='main__folders'>
                {props.folders.map(folder =>
                    <li key={folder.id}>
                        <NavLink
                            className='MainSidebar__folder-link'
                            to={`/main/${folder.id}`}>
                            <span>{countNotesForFolder(props.notes, folder,id)}</span>
                            {folder.name}
                        </NavLink>
                    </li>)}

            </div>

        </div>
    )
}