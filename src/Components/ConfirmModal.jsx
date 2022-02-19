import React from 'react';
import HorizontalButtons from './HorizontalButtons';
import { HiTrash } from 'react-icons/hi';


const ConfirmModal = () => {
    return (
        <div className="modalContainer">
            <section>
                <div className='icon'>
                    <HiTrash/>
                </div>
                <span>
                    Do you really want do delete this note?
                </span>
                <div className='actions'>
                    <HorizontalButtons />
                </div>
            </section>
        </div>
        
    );
}

export default ConfirmModal;