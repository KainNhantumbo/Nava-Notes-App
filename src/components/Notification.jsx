import { HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { NotificationContainer as Container } from '../styles/notification';

export default function Notification({
  status,
  btnDescription,
  btnEvent,
  textContent,
  icon
}) {
  return (
    <AnimatePresence>
      {status && (
        <Container>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.3
              }
            }}
            exit={{ opacity: 0, y: 110 }}>
            {icon}
            <span> {textContent} </span>
            <button onClick={btnEvent}>
              {<HiX />}
              <span>{btnDescription}</span>
            </button>
          </motion.section>
        </Container>
      )}
    </AnimatePresence>
  );
}
