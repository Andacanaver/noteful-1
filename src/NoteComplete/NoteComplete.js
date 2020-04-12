import React from 'react';
import Note from '../Note/Note';

export default function NoteComplete(props) {
    return (
        <section className='note__complete'>
            <Note 
                id={props.note.id}
                name={props.note.name}
                modified={props.note.modified}
            />
            <div className='note__content'>
                {props.note.content.split(/\n \r|\n/).map((para, i) =>
                <p key={i}>{para}</p>)}
            </div>
        </section>
    )
}

NoteComplete.defaultProps = {
    note: {
        content: '',
    }
}