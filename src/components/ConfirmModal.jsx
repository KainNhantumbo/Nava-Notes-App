import HorizontalButtons from './HorizontalButtons';
import { HiX } from 'react-icons/hi';
import { ModalContainer } from '../styles/confirmModal';
import { FaExclamationCircle, FaTrash } from 'react-icons/fa';

const ConfirmModal = ({ status, removeModal, action }) => {
	const trashIcon = <FaTrash />;
	const xIcon = <HiX />;

	return (
		<>
			{status === true ? (
				<ModalContainer>
					<div className='container'>
						<div className='icon'>
							<FaExclamationCircle />
						</div>
						<span className={'info'}>Do you really want to delete?</span>
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
