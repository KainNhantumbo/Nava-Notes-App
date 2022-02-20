import { useState } from 'react';
import HorizontalButtons from './HorizontalButtons';
import { HiExclamation } from 'react-icons/hi';
import { HiTrash } from 'react-icons/hi';
import { HiX } from 'react-icons/hi';

const ConfirmModal = () => {
    const trashIcon =  <HiTrash/>
    const xIcon = <HiX />

    const [visible, setVisible] = useState(false)
    
    return (
        <>
            {
                visible === true ? (
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
                ) : (
                    null
                )
            }
        </>
        
    )
}

export default ConfirmModal;