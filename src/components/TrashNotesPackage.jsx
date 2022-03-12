import React, { useContext } from 'react';
import Note from './Note';
import EmptyNotesMessage from './EmptyNotesMessage';
import { getDataFromStorage } from '../scripts/core-functions';
import { IoMdTrash } from 'react-icons/io';
import { IoMdRefreshCircle } from 'react-icons/io';

const TrashNotesPackage =
	({ eventDetete, eventRestore }) => {
		const notesData = getDataFromStorage('notes');
		const restoreIcon = <IoMdRefreshCircle/>
		const deleteIcon =  <IoMdTrash/>
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
								noteDetails={eventRestore}
								eventRemoveBtn={eventDetete}
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