import { useState } from 'react';

export const setDataToStorage = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));

export const getDataFromStorage = (key) =>
  JSON.parse(localStorage.getItem(key));

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
    visible
  };
}

export const retrieveNotes = () => {
  const notesData = getDataFromStorage('notes') || [];
  if (notesData.length < 1) setDataToStorage('notes', notesData);
  return notesData;
};

export const trashNotesPicker = () => {
  const trash = getDataFromStorage('trashData') || [];
  if (trash.length < 1) setDataToStorage('trashData', trash);
  return sortNotes(trash);
};

export const sortDataPicker = () =>
  getDataFromStorage('sortData') || 'crescentTitle';

export const sortNotes = (notesData) => {
  const pattern = getDataFromStorage('sortData') || 'crescentTitle';
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
