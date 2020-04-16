import React from 'react';
import NotesContext from '../NotesContext';
import Note from '../Note/Note';
import './NoteComplete.css';
import { findNote } from '../notehelpers'

class NoteComplete extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = NotesContext

    render() {
    const { notes: [] } = this.context
    const { noteId } = this.props.match.params
    const note = findNote(this.context.notes, noteId) || { content: '' }
    return (
        <section className='note__complete'>
            <Note 
                id={note.id}
                name={note.name}
                modified={note.modified}
            />
            <div className='note__content'>
                {note.content.split(/\n \r|\n/).map((para, i) =>
                <p key={i}>{para}</p>)}
            </div>
        </section>
    )
    }
}

export default NoteComplete