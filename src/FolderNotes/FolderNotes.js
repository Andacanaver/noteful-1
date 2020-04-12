import React from 'react';
import Note from '../Note/Note';

//need to specify a selected folder to populate those notes
//shows the notes of a selected folder (highlighted)
//Add note button at the bottom
//Clicking the "Noteful" title will bring you back to main page
export default function FolderNotes(props) {
    return (
        <section className='folders'>
            <div className='folder__notes'>
                <ul>
                    {props.notes.map(note =>
                        <li key={note.id} className='note'>
                            <Note
                                id={note.id}
                                name={note.name}
                                modified={note.modified}
                            />    
                        </li>
                    )}
                </ul>
            </div>
            <div>
                <button type='button'>
                    Add Note
                </button>
            </div>
        </section>
    )
}