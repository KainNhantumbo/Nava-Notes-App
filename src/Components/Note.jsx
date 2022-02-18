import React from 'react';
import PropTypes from 'prop-types';
import Button from './Buttons';
import SvgDelete from '../svgs/x-circle.svg';
import SvgInfo from '../svgs/information-circle.svg';

const Note = ({note}) => {
    return (
        <div>
            <span>{note}</span>
            <span className="buttonsContainer">
                <Button IconSrc={SvgInfo} alt={'info icon'} />
                <Button IconSrc={SvgDelete}/>
            </span>
        </div>
    );
}

Note.propTypes = {
    note: PropTypes.string.isRequired
}

export default Note;