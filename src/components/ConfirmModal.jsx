import HorizontalButtons from './HorizontalButtons';
import { HiX } from 'react-icons/hi';
import { ModalContainer } from '../styles/confirmModal';
import { FaExclamationCircle, FaTrash } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ConfirmModal = ({ accept, deny, status }) => (
	<>
		<AnimatePresence>
			{status && (
				<ModalContainer
					className='main'
					onClick={(e) => {
						const target = e.target.classList;
						if (target.contains('main')) {
							deny();
						}
					}}
				>
					<motion.div
						className='container'
						initial={{ opacity: 0, scale: 0 }}
						animate={{
							opacity: 1,
							scale: 1,
							transition: {
								duration: 0.3,
							},
						}}
						exit={{ opacity: 0, scale: 0 }}
					>
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
					</motion.div>
				</ModalContainer>
			)}
		</AnimatePresence>
	</>
);

export default ConfirmModal;
