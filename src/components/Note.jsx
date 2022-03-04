import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { HiXCircle } from 'react-icons/hi';
import { HiInformationCircle } from 'react-icons/hi';

const Note = ({id, note, noteDetails, eventRemoveBtn}) => {
    const deleteIcon =  <HiXCircle />;
    const infoIcon = <HiInformationCircle />;

    return (
        <div id={id}>
            <span>{note}</span>
            <span className="buttonsContainer">
                <Button event={noteDetails} icon={infoIcon} />
                <Button event={eventRemoveBtn} icon={deleteIcon}/>
            </span>
        </div>
    );
}

Note.propTypes = {
    note: PropTypes.string.isRequired
}

export default Note;