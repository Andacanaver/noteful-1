import React from 'react';
import Note from '../Note/Note';
import './MainNotes.css';
import NotesContext from '../NotesContext';
import { getNotesForFolder } from '../notehelpers'
import { Link } from 'react-router-dom'

//lists all of the notes from all of the folders, clicking on a note will open that note
//and display its contents
//Add note button at bottom
export default class MainNotes extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    
    static contextType = NotesContext

    render() {
    const { folderId } = this.props.match.params
    const { notes: [] } = this.context
    const notesForFolder = getNotesForFolder(this.context.notes, folderId)
    return (
        <section className='MainNotes'>
            <ul>
                {notesForFolder.map(note =>
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
            <Link
                id='add-note-link'
                to='/add-note'
            > Add Note
            </Link>
            </div>
        </section>
    )
    }
}