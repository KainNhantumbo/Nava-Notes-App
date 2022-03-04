import React from 'react';
import Note from './Note';
import EmptyNotesMessage from './EmptyNotesMessage';

const NotesPackage = ({ notesData, eventRemoveBtn, noteDetails }) => {
	return (
		<section className="mainContainer">
			{
				notesData.length === 0 || null ? (
					<EmptyNotesMessage
						label={'Oh! Looks like we have nothing to show...'}
						message={`Add some notes!`}
					/>
				) : (
					notesData.map((value, index) => {
						return <Note
							id={value.id}
							key={index}
							note={value.title}
							noteDetails={noteDetails}
							eventRemoveBtn={eventRemoveBtn}
						/>
					})
				)
			}
		</section>
	)
}

export default NotesPackage;