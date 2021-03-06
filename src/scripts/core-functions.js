import { useState } from 'react';

// salva os dados no localStorage
export const setDataToStorage = (key, data) => {
	localStorage.setItem(key, JSON.stringify(data));
};

//carrega os dados do localStorage
export const getDataFromStorage = (key) => {
	const data = JSON.parse(localStorage.getItem(key));
	return data;
};

//controla o comportamento do modal de confirmacao
export function ShowModal() {
	const [visible, setVisible] = useState(false);

	const renderConfirmModal = () => setVisible(true);
	const removeModal = () => setVisible(false);
	const removeNote = () => removeModal();

	return {
		renderConfirmModal,
		removeModal,
		removeNote,
		visible,
	};
}

// busca notas do localStorage e orndena
export const retrieveNotes = () => {
	var notesData = getDataFromStorage('notes');
	if (!notesData) {
		notesData = [];
		setDataToStorage('notes', notesData);
	}
	return notesData;
};

export const trashNotesPicker = () => {
	let trash = getDataFromStorage('trashData');
	if (!trash || trash === undefined) {
		trash = [];
		setDataToStorage('trashData', trash);
	}
	return (trash = sortNotes(trash));
};

// recupera os dados de sorteamento do localStorage
export const sortDataPicker = () => {
	let data = getDataFromStorage('sortData');
	if (!data || data === undefined) {
		data = 'crescentTitle';
		setDataToStorage('sortData', data);
	}
	return data;
};

// sorteia os elementos pelo titulo
export const sortNotes = (notesData) => {
	let pattern = getDataFromStorage('sortData');
	if (!pattern) {
		pattern = 'crescentTitle';
		setDataToStorage('sortData', pattern);
	}

	switch (pattern) {
		case 'crescentTitle':
			notesData.sort((a, b) => {
				if (a.title.toLowerCase() > b.title.toLowerCase()) return true;
				return -1;
			});
			break;
		case 'decrescentTitle':
			notesData.sort((a, b) => {
				if (a.title.toLowerCase() < b.title.toLowerCase()) return true;
				return -1;
			});
			break;
		case 'firstModification':
			notesData.sort((a, b) => {
				if (a.date > b.date) return true;
				return -1;
			});
			break;
		case 'lastModification':
			notesData.sort((a, b) => {
				if (a.date < b.date) return true;
				return -1;
			});
			break;
		default:
			return notesData;
	}
	return notesData;
};
