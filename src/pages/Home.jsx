import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect, createContext } from 'react';
import Header from '../components/Header';
import NoteEditor from '../components/NoteEditor';
import NotesPackage from '../components/NotesPackage';
import ConfirmModal from '../components/ConfirmModal';
import AddNoteInterface from '../components/AddNoteInterface';
import Notification from '../components/Notification';
import { HiCheckCircle } from 'react-icons/hi';
import { FaEdit, FaFeather } from 'react-icons/fa';
import { AddNoteButton } from '../styles/styles';
import { ShowModal, trashNotesPicker } from '../scripts/core-functions';
import { timeSetter } from '../scripts/core-date';
import SearchBox from '../components/SearchBox';
import {
	retrieveNotes,
	setDataToStorage,
	sortNotes,
} from '../scripts/core-functions';

export const searchContext = createContext();

export default function Home() {
	const { removeModal, removeNote, visible } = ShowModal();
	const [notificationStatus, setNotificationStatus] = useState(false);

	// pega os dados iniciais do localstorage
	const [unsortedData, setData] = useState([]);
	const data = sortNotes(unsortedData);

	// cria a interface para criacao de novas notas
	const [interfaceStatus, setInterfaceStatus] = useState(false);
	const [titleValue, setTitleValue] = useState('');
	const [textValue, setTextValue] = useState('');

	const renderAddNoteInterface = () => setInterfaceStatus(true);

	const removeAddNoteInterface = () => {
		resetValues();
		setInterfaceStatus(false);
	};

	// remove a interface para adicionar nota
	const discardNote = () => {
		resetValues();
		setInterfaceStatus(false);
	};

	// retorna o valor do state
	const getTitleValue = (e) => setTitleValue(e.target.value);
	const getTextValue = (e) => setTextValue(e.target.value);

	// reseta os valores do state
	const resetValues = () => {
		setTextValue('');
		setTitleValue('');
	};

	const saveNote = () => {
		const id = uuidv4();
		const date = timeSetter();
		const new_note = {
			id,
			title: titleValue,
			content: textValue,
			updatedAt: date,
			date: new Date().toISOString(),
		};
		if (!new_note.title) return;
		data.push(new_note);
		setDataToStorage('notes', data);
		removeAddNoteInterface();
		return data;
	};

	// interface de edicao e previsualizacao de notas
	const [editInterfaceStatus, setEditInterfaceStatus] = useState(false);
	const [editedNoteID, setEditedNoteID] = useState('');

	const noteToEdit = (e) => {
		const id = e.target.parentNode.parentNode.id;
		const [tempNote] = data.filter((note) => (id === note.id ? note : null));
		setTitleValue(tempNote.title);
		setTextValue(tempNote.content);
		setEditedNoteID(() => tempNote.id);
	};

	const saveEditedNote = () => {
		const date = timeSetter();
		if (!titleValue) return;
		data.map((note) => {
			if (note.id === editedNoteID) {
				note.title = titleValue;
				note.content = textValue;
				note.updatedAt = date;
				note.date = new Date().toISOString();
			}
		});
		setDataToStorage('notes', data);
		setData(() => retrieveNotes('notes'));
		setEditedNoteID('');
		closeEditInterface();
	};

	const renderEditInterface = (e) => {
		setEditInterfaceStatus(() => true);
		noteToEdit(e);
	};

	const closeEditInterface = () => {
		setEditInterfaceStatus(() => false);
	};

	const [seachedNotes, setSearchedNotes] = useState([]);
	const searchNotes = (e) => {
		const value = e.target.value.toLowerCase();
		const newNotesData = data.filter((elements) => {
			const notesTitle = elements.title.toLowerCase();
			const notesContent = elements.content.toLowerCase();
			if (notesTitle.includes(value) || notesContent.includes(value)) {
				return elements;
			}
			return;
		});
		setSearchedNotes(newNotesData);
		if (value.length < 1) {
			setSearchedNotes(() => []);
		}
	};

	const moveNoteToTrash = (e) => {
		const id = e.target.parentNode.parentNode.id;
		const trashNotes = trashNotesPicker();
		const [trash_note] = data.filter((note) => {
			if (note.id === id) {
				return note;
			}
		});
		const notes = data.filter((note) => {
			if (note.id !== id) {
				return note;
			}
		});
		setDataToStorage('notes', notes);
		trashNotes.push(trash_note);
		setDataToStorage('trashData', trashNotes);
		setData(() => retrieveNotes('notes'));
		setNotificationStatus(() => true);
		removeNotificationByDelay(notificationStatus);
	};

	// funcoes para gestao de notificao
	const removeNotification = () => {
		setNotificationStatus(() => false);
	};

	const removeNotificationByDelay = (status) => {
		if (status === true) return;
		setTimeout(() => {
			setNotificationStatus(() => false);
		}, 3500);
	};

	useEffect(() => {
		setData(() => retrieveNotes('notes'));
	}, []);

	return (
		<>
			<searchContext.Provider value={searchNotes}>
				<Header title={'Notes'} child={<SearchBox />} icon={<FaEdit />} />
			</searchContext.Provider>

			<AddNoteButton>
				<button
					title='Add a new note'
					className='addNoteButton'
					onClick={renderAddNoteInterface}
				>
					<FaFeather />
				</button>
			</AddNoteButton>

			<NotesPackage
				eventRemoveBtn={moveNoteToTrash}
				eventDetailsBtn={renderEditInterface}
				searchedNotes={seachedNotes}
				notesData={data}
			/>

			<NoteEditor
				titleValue={getTitleValue}
				textValue={getTextValue}
				close={closeEditInterface}
				status={editInterfaceStatus}
				inputValue={titleValue}
				textAreaValue={textValue}
				updateEvent={saveEditedNote}
			/>

			<AddNoteInterface
				titleValue={getTitleValue}
				textValue={getTextValue}
				saveEvent={saveNote}
				cancelEvent={discardNote}
				interfaceExit={removeAddNoteInterface}
				status={interfaceStatus}
			/>

			<Notification
				status={notificationStatus}
				textContent={'Recicled'}
				btnDescription={'Desmiss'}
				btnEvent={removeNotification}
				icon={<HiCheckCircle />}
			/>

			<ConfirmModal
				removeModal={removeModal}
				removeNote={removeNote}
				status={visible}
			/>
		</>
	);
}
