import React, { useContext } from 'react';
import Note from './Note';
import EmptyNotesMessage from './EmptyNotesMessage';
import { notesDataContext } from '../pages/Home';

const NotesPackage =
	({ eventRemoveBtn, noteDetails, searchedNotes }) => {
		const notesData = useContext(notesDataContext);

		const guest = (searchedNotes, notesData) => {
			if (searchedNotes.length !== 0)
				return (
					searchedNotes.map((value, index) => {
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

		const renderNotes = guest(searchedNotes, notesData);

		return (
			<section className="mainContainer">
				{
					renderNotes.length === 0 || null ? (
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