import React from 'react';
import { Link } from 'react-router-dom';

export default function NoteMain(props) {
    return (
        <div className='note'>
            <h2 className='note__title'>
                <Link
                to={`/note/${props.id}`}>{props.name}</Link>
            </h2>
            <button className='delete__button' type='button'>Delete Note</button>
        </div>
    )
}