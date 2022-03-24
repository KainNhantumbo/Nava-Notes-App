import React from 'react';
import Note from './Note';
import EmptyNotesMessage from './EmptyNotesMessage';
import { IoMdTrash } from 'react-icons/io';
import { HiNewspaper } from 'react-icons/hi';
import { MdRestore } from 'react-icons/md';

const TrashNotesPackage =
	({ eventDelete, eventRestore, trashNotes }) => {
		return (
			<section className="mainContainer">
				{
					trashNotes.length === 0 || null ? (
						<EmptyNotesMessage
							label={'Nothing to show!'}
							message={`Looks like the trash is empty.`}
							icon={ <HiNewspaper/> }
						/>
					) : (
						trashNotes.map((value, index) => {
							return <Note
								id={value.id}
								key={index}
								note={value.title}
								noteContent={value.content}
								noteDate={value.createdAt}
								eventDetailsBtn={eventRestore}
								eventRemoveBtn={eventDelete}
								firstIcon={<MdRestore/>}
								secondIcon={<IoMdTrash/>}
							/>
						})
					)
				}
			</section>
		);
	}

export default TrashNotesPackage;