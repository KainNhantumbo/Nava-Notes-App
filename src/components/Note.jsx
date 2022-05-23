import Button from './Button';
import { NoteContainer } from '../styles/note';
import { HiInformationCircle, HiXCircle } from 'react-icons/hi';

const Note = ({
	id,
	note,
	eventDetailsBtn,
	eventRemoveBtn,
	noteContent,
	noteDate,
}) => {
	return (
		<NoteContainer id={id}>
			<span className='noteTitle'> {note} </span>
			<div className='noteContent'> {`${noteContent}`} </div>
			<div className='noteDate'> {noteDate} </div>
			<span className='buttonsContainer'>
				<Button event={eventDetailsBtn} icon={<HiInformationCircle />} />
				<Button event={eventRemoveBtn} icon={<HiXCircle />} />
			</span>
		</NoteContainer>
	);
};

export default Note;
