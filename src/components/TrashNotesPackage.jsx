import React from 'react';
import Note from './Note';
import EmptyNotesMessage from './EmptyNotesMessage';
import { HiNewspaper, BiHistory, TiTrash } from 'react-icons/all';

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
								noteDate={value.updatedAt}
								eventDetailsBtn={eventRestore}
								eventRemoveBtn={eventDelete}
								firstIcon={<BiHistory/>}
								secondIcon={<TiTrash/>}
							/>
						})
					)
				}
			</section>
		);
	}

export default TrashNotesPackage;