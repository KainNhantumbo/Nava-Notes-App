import HorizontalButtons from './HorizontalButtons';
import { HiExclamation, HiX } from 'react-icons/hi';
import { ModalContainer } from '../styles/confirmModal';
import { FaTrash } from 'react-icons/fa';

const ConfirmModal = ({ status, removeModal, action }) => {
	const trashIcon = <FaTrash />;
	const xIcon = <HiX />;

	return (
		<>
			{status === true ? (
				<ModalContainer>
					<div className='modalContainer'>
						<div className='icon'>
							<HiExclamation />
						</div>
						<span>Do you really want do delete this note?</span>
						<div className='actions'>
							<HorizontalButtons
								event={action}
								icon={trashIcon}
								description={'Confirm'}
							/>
							<HorizontalButtons
								event={removeModal}
								icon={xIcon}
								description={'Cancel'}
							/>
						</div>
					</div>
				</ModalContainer>
			) : null}
		</>
	);
};

export default ConfirmModal;
