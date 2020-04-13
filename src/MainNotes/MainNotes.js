import React from 'react';
import Note from '../Note/Note';
import './MainNotes.css';

//lists all of the notes from all of the folders, clicking on a note will open that note
//and display its contents
//Add note button at bottom
export default function MainNotes(props) {
    return (
        <section className='MainNotes'>
            <ul>
                {props.notes.map(note =>
                    <li className='note__list' key={note.id}>
                        <Note 
                            id={note.id}
                            name={note.name}
                            modified={note.modified}
                        />    
                    </li>
                )}
            </ul>
            <div>
                <button 
                    className='add-note__button'
                    type='button'>
                    Add Note
                </button>
            </div>
        </section>
    )
}

MainNotes.defaultProps ={
    notes: []
}