import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { NoteContainer } from '../styles/note';

const Note = 
({id, note, eventDetailsBtn, eventRemoveBtn, noteContent, noteDate, firstIcon, secondIcon}) => {
    
    
    return (
        <NoteContainer id={id}>
            <span className='noteTitle'> { note } </span>
            <div className='noteContent'> { `${noteContent}` } </div>
            <div className='noteDate'> { noteDate } </div>
            <span className="buttonsContainer">
                <Button event={eventDetailsBtn} icon={firstIcon} />
                <Button event={eventRemoveBtn} icon={secondIcon}/>
            </span>
        </NoteContainer>
    );
}

Note.propTypes = {
    note: PropTypes.string.isRequired
}

export default Note;