import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { HiXCircle } from 'react-icons/hi';
import { HiInformationCircle } from 'react-icons/hi';

const Note = ({note, showNote, deleteNote}) => {
    const deleteIcon =  <HiXCircle />;
    const infoIcon = <HiInformationCircle />;

    return (
        <div>
            <span>{note}</span>
            <span className="buttonsContainer">
                <Button event={showNote} icon={infoIcon} />
                <Button event={deleteNote} icon={deleteIcon}/>
            </span>
        </div>
    );
}

Note.propTypes = {
    note: PropTypes.string.isRequired
}

export default Note;