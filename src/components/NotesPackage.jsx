import React, { useEffect, useContext } from 'react';
import Note from './Note';
import EmptyNotesMessage from './EmptyNotesMessage';
import { notesDataContext } from '../pages/Home';


const NotesPackage =
	({ eventRemoveBtn, noteDetails, newData }) => {
		const notesData = useContext(notesDataContext);

		

		
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
		
		useEffect(()=>{
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
		}, [newData])

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