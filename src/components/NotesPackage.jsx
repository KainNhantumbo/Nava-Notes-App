import React, { useContext } from 'react';
import Note from './Note';
import EmptyNotesMessage from './EmptyNotesMessage';
import { HiXCircle } from 'react-icons/hi';
import { HiInformationCircle } from 'react-icons/hi';
import Greet from './Greet';

const NotesPackage =
	({ eventRemoveBtn, noteDetails, searchedNotes, notesData }) => {
		const deleteIcon = <HiXCircle />;
		const infoIcon = <HiInformationCircle />;

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
							firstIcon={infoIcon}
							secondIcon={deleteIcon}
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
						firstIcon={infoIcon}
						secondIcon={deleteIcon}
					/>
				})
			)
		}

		const renderNotes = guest(searchedNotes, notesData);

		return (
			<section className="mainContainer">
				<Greet />
				
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