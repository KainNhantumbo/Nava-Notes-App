import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { NoteContainer } from '../styles/note.module';

const Note = 
({id, note, noteDetails, eventRemoveBtn, noteContent, noteDate, firstIcon, secondIcon}) => {
    
    
    return (
        <NoteContainer id={id}>
            <span className='noteTitle'> { note } </span>
            <div className='noteContent'> { `${noteContent}` } </div>
            <div className='noteDate'> { noteDate } </div>
            <span className="buttonsContainer">
                <Button event={noteDetails} icon={firstIcon} />
                <Button event={eventRemoveBtn} icon={secondIcon}/>
            </span>
        </NoteContainer>
    );
}

Note.propTypes = {
    note: PropTypes.string.isRequired
}

export default Note;