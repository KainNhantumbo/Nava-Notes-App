import React from 'react';
import Note from './Note';
import EmptyNotesMessage from './EmptyNotesMessage';
import { retrieveNotes } from '../scripts/core-functions';

const NotesPackage =
	({ eventRemoveBtn, noteDetails }) => {
		const notesData = retrieveNotes();
		console.log(notesData)
		const renderNotes = notesData.map((value, index) => {
			return <Note
				id={value.id}
				key={index}
				note={value.title}
				noteContent={value.content}
				noteDate={value.createdAt}
				noteDetails={noteDetails}
				eventRemoveBtn={eventRemoveBtn}
			/>
		});

		return (
			<section className="mainContainer">
				{
					notesData.length === 0 || null ? (
						<EmptyNotesMessage
							label={'Oh! Looks like we have nothing to show...'}
							message={`Add some notes!`}
						/>
					) : (
						renderNotes
					)
				}
			</section>
		)
	}

export default NotesPackage;