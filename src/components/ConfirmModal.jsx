import HorizontalButtons from './HorizontalButtons';
import { HiX } from 'react-icons/hi';
import { ModalContainer } from '../styles/confirmModal';
import { FaExclamationCircle, FaTrash } from 'react-icons/fa';

const ConfirmModal = ({ accept, deny, status }) => (
	<>
		{status && (
			<ModalContainer>
				<div className='container'>
					<div className='icon'>
						<FaExclamationCircle />
					</div>
					<span className={'info'}>Do you really want to delete?</span>
					<div className='actions'>
						<HorizontalButtons
							event={accept}
							icon={<FaTrash />}
							description={'Confirm'}
						/>
						<HorizontalButtons
							event={deny}
							icon={<HiX />}
							description={'Cancel'}
						/>
					</div>
				</div>
			</ModalContainer>
		)}
	</>
);

export default ConfirmModal;
