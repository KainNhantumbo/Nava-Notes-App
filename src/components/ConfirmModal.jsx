import { motion, AnimatePresence } from 'framer-motion';
import { ModalContainer as Container } from '../styles/confirmModal';
import { FaExclamationCircle, FaTrash, HiX } from 'react-icons/all';

const ConfirmModal = ({ accept, deny, status }) => (
  <AnimatePresence>
    {status && (
      <Container
        className='main'
        onClick={(e) => {
          const target = e.target.classList;
          if (target.contains('main')) {
            deny();
          }
        }}>
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
          exit={{ opacity: 0, scale: 0 }}>
          <div className='icon'>
            <FaExclamationCircle />
          </div>
          <span className={'info'}>Do you really want to delete?</span>
          <div className='actions'>
            <button onClick={accept}>
              <div>
                <FaTrash />
              </div>
              <span> Confirm </span>
            </button>
            <button onClick={deny}>
              <div>
                <HiX />
              </div>
              <span> Cancel </span>
            </button>
          </div>
        </motion.div>
      </Container>
    )}
  </AnimatePresence>
);

export default ConfirmModal;
