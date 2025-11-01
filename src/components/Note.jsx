import { motion } from 'framer-motion';
import { NoteContainer as Container } from '../styles/note';

export default function Note({
  id,
  note,
  eventDetailsBtn,
  eventRemoveBtn,
  noteContent,
  noteDate,
  firstIcon,
  secondIcon
}) {
  return (
    <Container id={id}>
      <span className='noteTitle'> {note} </span>
      <div className='noteContent'> {noteContent} </div>
      <div className='noteDate'> {noteDate} </div>
      <span className='buttonsContainer'>
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={eventDetailsBtn}>
          {firstIcon}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={eventRemoveBtn}>
          {secondIcon}
        </motion.button>
      </span>
    </Container>
  );
}
