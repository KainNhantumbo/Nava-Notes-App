import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { HiXCircle } from 'react-icons/hi';
import { HiInformationCircle } from 'react-icons/hi';
import { NoteContainer } from '../styles/note.module';

const Note = 
({id, note, noteDetails, eventRemoveBtn, noteContent, noteDate}) => {
    const deleteIcon =  <HiXCircle />;
    const infoIcon = <HiInformationCircle />;
    
    return (
        <NoteContainer id={id}>
            <span className='noteTitle'> { note } </span>
            <div className='noteContent'> { `${noteContent}` } </div>
            <div className='noteDate'> { noteDate } </div>
            <span className="buttonsContainer">
                <Button event={noteDetails} icon={infoIcon} />
                <Button event={eventRemoveBtn} icon={deleteIcon}/>
            </span>
        </NoteContainer>
    );
}

Note.propTypes = {
    note: PropTypes.string.isRequired
}

export default Note;