import React from 'react';
import PropTypes from 'prop-types';
import Button from './Buttons';
import SvgDelete from '../svgs/x-circle.svg';
import SvgInfo from '../svgs/information-circle.svg';

const Note = ({note, extendNote, deleteNote}) => {
    return (
        <div>
            <span>{note}</span>
            <span className="buttonsContainer">
                <Button 
                    event={extendNote}
                    iconSrc={SvgInfo} 
                    alt={'info icon'} 
                />
                <Button 
                    event={deleteNote} 
                    iconSrc={SvgDelete} 
                    alt={'delete icon'}
                />
            </span>
        </div>
    );
}

Note.propTypes = {
    note: PropTypes.string.isRequired
}

export default Note;