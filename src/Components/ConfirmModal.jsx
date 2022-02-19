import React from 'react';
import {HiTrash} from 'react-icons/hi'

const ConfirmModal = () => {
    return (
        <div className="modalContainer">
            <section>
                <div>
                    <HiTrash/>
                </div>
                <span>
                    Do you really want do delete this note?
                </span>
            </section>
        </div>
        
    );
}

export default ConfirmModal;