import React, { useEffect, useContext } from 'react';
import Note from './Note';
import EmptyNotesMessage from './EmptyNotesMessage';
import { notesDataContext } from '../pages/Home';

const NotesPackage =
	({ eventRemoveBtn, noteDetails, searchedNotes }) => {
		const notesData = useContext(notesDataContext);
		console.log(searchedNotes)
		let searchedNote = [{
			d: "eaf23f80-d9f2-4d47-b7ab-f833518eac07",
			title: "Limpar a casa",
			content: "De  segunda a sexta, das 08 ás 11 da manhã.",
			createdAt: "Monday, 7 March 2022 at 18:31"
		}]
		
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