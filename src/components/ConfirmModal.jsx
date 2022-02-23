import HorizontalButtons from './HorizontalButtons';
import { HiExclamation } from 'react-icons/hi';
import { HiTrash } from 'react-icons/hi';
import { HiX } from 'react-icons/hi';

const ConfirmModal = ({status, removeModal, removeNote}) => {
    const trashIcon =  <HiTrash/>
    const xIcon = <HiX/>
    
    return (
        <>
            {
                status === true ? (
                    <div className="modalContainer">
                        <section>
                            <div className='icon'>
                                <HiExclamation/>
                            </div>
                            <span>
                                Do you really want do delete this note?
                            </span>
                            <div className='actions'>
                                <HorizontalButtons event={removeNote} icon={trashIcon} description={'Confirm'}/>
                                <HorizontalButtons event={removeModal} icon={xIcon} description={'Cancel'}/>
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