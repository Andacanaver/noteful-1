import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import NotesContext from '../NotesContext';
import './Note.css';

//these are singular notes that get populated when clicked on in NoteSidebar
//Contents are displayed below the note
//Delete note button

function deleteNote(noteId, callback) {
    console.log(`http://localhost:9090/notes/${noteId}`);
    fetch(`http://localhost:9090/notes/${noteId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
    })
    .then (res => {
        if (!res.ok) {
            return res.json().then(error => {
                throw error
            })
        }
        return res.json()
    })
    .then (() => {
        callback(noteId)
        //this.props.onDeleteNote(noteId)
    })
    .catch(error => {
        console.log(error)
    })
}


export default function Note(props) {
    return (
        <NotesContext.Consumer>
            {(context => (
                <div className='note'>
                <h2>
                    <Link
                    className='note__title'
                    to={`/notecomplete/${props.id}`}>{props.name}</Link>
                </h2>
                <div className='note__date'>
                    Modified
                    {/* {' '}
                    <p className='note__date-format'>{format(new Date(props.modified), 'Do mm dd yyyy')}</p> */}
                </div>
    
                <button 
                    className='delete__button' 
                    type='button'
                    onClick={() => {
                        deleteNote(props.id, context.deleteNote,
                        )
                    }}
                >Remove</button>
            </div>
            ))}
        
        </NotesContext.Consumer>
    )
}