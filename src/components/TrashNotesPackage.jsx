import React, { useContext } from 'react';
import Note from './Note';
import EmptyNotesMessage from './EmptyNotesMessage';
import { getDataFromStorage } from '../scripts/core-functions';

const TrashNotesPackage =
	({ eventDetete, eventUndo }) => {
		const notesData = getDataFromStorage('notes');
		return (
			<section className="mainContainer">
				{
					notesData.length === 0 || null ? (
						<EmptyNotesMessage
							label={'Nothing to show!'}
							message={`Looks like the trash is empty.`}
						/>
					) : (
						notesData.map((value, index) => {
							return <Note
								id={value.id}
								key={index}
								note={value.title}
								noteContent={value.content}
								noteDate={value.createdAt}
								noteDetails={eventUndo}
								eventRemoveBtn={eventDetete}
							/>
						})
					)
				}
			</section>
		)
	}

export default TrashNotesPackage;