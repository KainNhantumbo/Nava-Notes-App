import Note from './Note';
import EmptyNotesMessage from './EmptyNotesMessage';
import { HiPaperAirplane } from 'react-icons/hi';
import Greet from './Greet';

const NotesPackage = ({
	eventRemoveBtn,
	eventDetailsBtn,
	searchedNotes,
	notesData,
}) => {
	const guest = (searchedNotes, notesData) => {
		if (searchedNotes.length !== 0)
			return searchedNotes.map((value, index) => {
				return (
					<Note
						id={value.id}
						key={index}
						note={value.title}
						noteContent={value.content}
						noteDate={value.updatedAt}
						eventDetailsBtn={eventDetailsBtn}
						eventRemoveBtn={eventRemoveBtn}
					/>
				);
			});
		return notesData.map((value, index) => {
			return (
				<Note
					id={value.id}
					key={index}
					note={value.title}
					noteContent={value.content}
					noteDate={value.updatedAt}
					eventDetailsBtn={eventDetailsBtn}
					eventRemoveBtn={eventRemoveBtn}
				/>
			);
		});
	};

	const renderNotes = guest(searchedNotes, notesData);

	return (
		<section className='mainContainer'>
			<Greet />

			{renderNotes.length === 0 || null ? (
				<EmptyNotesMessage
					label={'Oh! Looks like we have nothing to show...'}
					message={`Add some notes!`}
					icon={<HiPaperAirplane />}
				/>
			) : (
				renderNotes
			)}
		</section>
	);
};

export default NotesPackage;
