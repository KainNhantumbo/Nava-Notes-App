import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import TrashNotesPackage from '../components/TrashNotesPackage';
import Notification from '../components/Notification';
import { MdDeleteForever } from 'react-icons/md';
import { HiFire } from 'react-icons/hi';
import { HiCheckCircle } from 'react-icons/hi';
import {
	setDataToStorage,
	sortNotes,
	trashNotesPicker,
	retrieveNotes,
} from '../scripts/core-functions';
import { FaTrashAlt } from 'react-icons/fa';
import ConfirmModal from '../components/ConfirmModal';

const Trash = () => {
	// confirm modal states
	const [modalState, setModalState] = useState(false);

	// pega as notas do localstorage
	const [notesData, setNotesData] = useState([]);
	useEffect(() => {
		setNotesData(() => retrieveNotes('notes'));
	}, []);

	// carrega os dados do localstorage
	const [unsortedTrashData, setUnsortedTrashData] = useState([]);
	const trashData = sortNotes(unsortedTrashData);
	useEffect(() => {
		setUnsortedTrashData(() => trashNotesPicker());
	}, []);

	// estados componente Notification
	const [notificationIcon, setNotificationIcon] = useState(() => {
		return <HiCheckCircle />;
	});
	const [notificationInfo, setNotificationInfo] = useState('Sucess');
	const [notificationStatus, setNotificationStatus] = useState(false);

	// apaga permanentemente todas as notas do lixo
	const trashReseter = () => {
		var trash = [];
		setDataToStorage('trashData', trash);
		setUnsortedTrashData(() => trashNotesPicker());
		// configuração da notificação
		configNotification('Trash wiped!', <MdDeleteForever />);
		setNotificationStatus(() => true);
		removeNotificationByDelay(notificationStatus);
	};

	// restaura do lixeira a nota selecionada
	const restoreNote = (e) => {
		const id = e.target.parentNode.parentNode.id;
		const trashNote = trashData.filter((note) => {
			if (note.id === id) {
				return note;
			}
		});
		const notes = trashData.filter((note) => {
			if (note.id !== id) {
				return note;
			}
		});
		notesData.push(trashNote[0]);
		setDataToStorage('notes', notesData);
		setDataToStorage('trashData', notes);
		setUnsortedTrashData(() => trashNotesPicker());

		// configuração da notificação
		configNotification('Note restored', <HiCheckCircle />);
		setNotificationStatus(() => true);
		removeNotificationByDelay(notificationStatus);
	};

	// apaga permanentemente todas as notas da lixeira
	const permanentDelete = (e) => {
		const id = e.target.parentNode.parentNode.id;
		const trashNotes = trashData.filter((note) => {
			if (note.id !== id) {
				return note;
			}
		});
		setDataToStorage('trashData', trashNotes);
		setUnsortedTrashData(() => trashNotesPicker());

		// configuração da notificação
		configNotification('Note deleted.', <MdDeleteForever />);
		setNotificationStatus(() => true);
		removeNotificationByDelay(notificationStatus);
	};

	// funcoes para gestao de notificao
	// remove a notificacao pelo botao
	const removeNotification = () => {
		setNotificationStatus(() => false);
	};

	// remove a notificacao por delay
	const removeNotificationByDelay = (status) => {
		if (status) return;

		setTimeout(() => {
			setNotificationStatus(() => false);
		}, 3500);
	};

	// seta o icone e descricao da notificação
	const configNotification = (info, icon) => {
		setNotificationInfo(() => info);
		setNotificationIcon(() => icon);
	};

	return (
		<>
			<Header
				title={'Trash'}
				child={
					<Button
						description='Permanently Delete All'
						icon={<HiFire />}
						event={(e) => {
							setModalState(true);
						}}
					/>
				}
				icon={<FaTrashAlt />}
			/>
			<TrashNotesPackage
				eventRestore={restoreNote}
				eventDelete={permanentDelete}
				trashNotes={trashData}
			/>

			<Notification
				status={notificationStatus}
				textContent={notificationInfo}
				btnDescription={'Desmiss'}
				btnEvent={removeNotification}
				icon={notificationIcon}
			/>
			<ConfirmModal
				status={modalState}
				accept={(e) => {
					trashReseter();
					setModalState((prevState) => !prevState);
				}}
				deny={(e) => {
					setModalState((prevState) => !prevState);
				}}
			/>
		</>
	);
};

export default Trash;
