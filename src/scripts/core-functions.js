import { useState, useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import { timeSetter } from './core-date';

// salva os dados no localStorage
export const setDataToStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
}

//carrega os dados do localStorage
export const getDataFromStorage = (key) => {
  const data = JSON.parse(localStorage.getItem(key));
  return data;
}

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
  }
}

// busca notas do localStorage e orndena
export const retrieveNotes = () => {
  var notesData = getDataFromStorage('notes');
  if (!notesData) {
    notesData = [];
    setDataToStorage('notes', notesData);
  }
  
  var pattern = 'crescentTitle';
  return notesData = sortNotes(pattern, notesData);
}

// sorteia os elementos pelo titulo

const sortNotes = (pattern, notesData) => {
  switch ( pattern ) {
    case 'crescentTitle':
      notesData.sort((a, b) => {
        if (a.title > b.title) return true;
        if (a.title < b.title) return -1;
      });
      break;
    case 'decrescentTitle':
      notesData.sort((a, b) => {
        if (a.title < b.title) return true;
        if (a.title > b.title) return -1;
      });
      break;
    case 'firstModification':
      notesData.sort((a, b) => {
        if (a.date > b.date) return true;
        if (a.date < b.date) return -1;
      });
      break;
    case 'lastModification':
      notesData.sort((a, b) => {
        if (a.date < b.date) return true;
        if (a.date > b.date) return -1;
      });
      break;
    default:
    return notesData;
  }
  
  return notesData;
}

// elimina as notas
export const deleteNote = (e) => {
  const id = e.target.parentNode.parentNode.id;
  var notesData = getDataFromStorage('notes');

  const notes = notesData.filter(note => {
    if (note.id !== id) {
      return note;
    }
  });

  setDataToStorage('notes', notes);
  return {
    notes
  }
}

export const AddNoteInterfaceCore = () => {
  const notesData = getDataFromStorage('notes');
  const [interfaceStatus, setInterfaceStatus] = useState(false);
  const [titleValue, setTitleValue] = useState(() => '');
  const [textValue, setTextValue] = useState(() => ``);

  // renderiza a interface para adicionar nota
  const renderAddNoteInterface = () => setInterfaceStatus(true);

  // remove a interface para adicionar nota
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
  const getTitleValue = e => setTitleValue(e.target.value);
  const getTextValue = e => setTextValue(`${e.target.value}`);

  // reseta os valores do state
  const resetValues = () => {
    setTextValue(() => '');
    setTitleValue(() => '');
  }

  // adiciona nota ao banco de dados
  const saveNote = () => {
    const id = uuidv4();
    const date = timeSetter();

    const newNote = {
      id,
      title: titleValue,
      content: textValue,
      createdAt: date
    }

    if (newNote.title === '' || newNote.content === '')
      return;

    notesData.push(newNote)

    // salva a nota no localstorage
    setDataToStorage('notes', notesData)
    removeAddNoteInterface()
    return notesData;
  }

  return {
    renderAddNoteInterface,
    removeAddNoteInterface,
    discardNote,
    interfaceStatus,
    getTitleValue,
    getTextValue,
    saveNote
  }
}
