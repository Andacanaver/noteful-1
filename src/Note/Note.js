import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import './Note.css';

//these are singular notes that get populated when clicked on in NoteSidebar
//Contents are displayed below the note
//Delete note button
export default function Note(props) {
    console.log(props.modified);
    return (
        <div className='note'>
            <h2 className='note__title'>
                <Link
                to={`/notecomplete/${props.id}`}>{props.name}</Link>
            </h2>
            <div className='note__date'>
                Modified
                {' '}
                <p className='note__date-format'>{format(new Date(props.modified), 'Do mm dd yyyy')}</p>
            </div>

            <button className='delete__button' type='button'>Remove</button>
        </div>
    )
}