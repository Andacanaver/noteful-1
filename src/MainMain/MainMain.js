import React from 'react';
import { Link } from 'react-router-dom';

export default function MainMain(props) {
    defaultProps = {
        notes: []
    }

    return (
        <section className='MainMain'>
            <ul>
                {props.notes.map(note =>
                    <li key={note.id}>
                        <Note 
                            id={note.id}
                            name={note.name}
                            modified={note.modified}
                        />    
                    </li>
                )}
            </ul>
        </section>
    )
}