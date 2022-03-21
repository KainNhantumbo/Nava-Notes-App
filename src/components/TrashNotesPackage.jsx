import React from 'react';
import Note from './Note';
import EmptyNotesMessage from './EmptyNotesMessage';
import { trashNotesPicker } from '../scripts/core-functions';
import { IoMdTrash } from 'react-icons/io';
import { HiRefresh } from 'react-icons/hi';

const TrashNotesPackage =
	({ eventDelete, eventRestore, trashNotes }) => {
		const restoreIcon = <HiRefresh/>;
		const deleteIcon =  <IoMdTrash/>;
		
		return (
			<section className="mainContainer">
				{
					trashNotes.length === 0 || null ? (
						<EmptyNotesMessage
							label={'Nothing to show!'}
							message={`Looks like the trash is empty.`}
						/>
					) : (
						trashNotes.map((value, index) => {
							return <Note
								id={value.id}
								key={index}
								note={value.title}
								noteContent={value.content}
								noteDate={value.createdAt}
								noteDetails={eventRestore}
								eventRemoveBtn={eventDelete}
								firstIcon={restoreIcon}
								secondIcon={deleteIcon}
							/>
						})
					)
				}
			</section>
		)
	}

export default TrashNotesPackage;