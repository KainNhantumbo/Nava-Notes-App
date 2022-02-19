import React from 'react';
import HorizontalButtons from './HorizontalButtons';
import { HiExclamation } from 'react-icons/hi';
import { HiTrash } from 'react-icons/hi';
import { HiX } from 'react-icons/hi';

const ConfirmModal = () => {
    const trashIcon =  <HiTrash/>
    const xIcon = <HiX />
    return (
        <div className="modalContainer">
            <section>
                <div className='icon'>
                    <HiExclamation/>
                </div>
                <span>
                    Do you really want do delete this note?
                </span>
                <div className='actions'>
                    <HorizontalButtons icon={trashIcon} description={'Confirm'}/>
                    <HorizontalButtons icon={xIcon} description={'Cancel'}/>
                </div>
            </section>
        </div>
        
    );
}

export default ConfirmModal;