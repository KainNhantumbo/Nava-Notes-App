import React, { useContext } from 'react';
import Note from './Note';
import EmptyNotesMessage from './EmptyNotesMessage';
import { notesDataContext } from '../pages/Home';

const NotesPackage =
	({ eventRemoveBtn, noteDetails }) => {
		const notesData = useContext(notesDataContext);

		const renderNotes = () => {
			return (
				notesData.map((value, index) => {
					return <Note
						id={value.id}
						key={index}
						note={value.title}
						noteContent={value.content}
						noteDate={value.createdAt}
						noteDetails={noteDetails}
						eventRemoveBtn={eventRemoveBtn}
					/>
				})
			)
		}

		return (
			<section className="mainContainer">
				{
					renderNotes.length === 0 || null ? (
						<EmptyNotesMessage
							label={'Nothing to show!'}
							message={`Looks like the trash is empty.`}
						/>
					) : (
						renderNotes
					)
				}
			</section>
		)
	}

export default NotesPackage;