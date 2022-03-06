import { useState, useEffect } from "react";
import useLocalStorage from 'react-localstorage-hook'
import { v4 as uuidv4 } from 'uuid';

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

export const retrieveNotes = () => {
  var notesData = getDataFromStorage('notes');

  if (!notesData) {
    notesData = [];
    setDataToStorage('notes', notesData);
  }
  // sorteia os elementos pelo titulo
  return (
    notesData.sort((a, b) => {
      if (a.title > b.title) return true;
      if (a.title < b.title) return -1;
    })
  );
}

// elimina as notas
export const deleteNote = (e) => {
  const id = e.target.parentNode.parentNode.id;
  var notesData = getDataFromStorage('notes');

  for (let i = 0; i < notesData.length; i++) {
    if (notesData[i].id === id) {
      notesData.splice([i], 1);
    }
  }
  setDataToStorage('notes', notesData);
}

export const AddNoteInterfaceCore = () => {
  const notesData = getDataFromStorage('notes');
  const [interfaceStatus, setInterfaceStatus] = useState(false);
  const [titleValue, setTitleValue] = useState(() => '');
  const [textValue, setTextValue] = useState(() => '');

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
  const getTextValue = e => setTextValue(e.target.value);

  // reseta os valores do state
  const resetValues = () => {
    setTextValue(() => '');
    setTitleValue(() => '');
  }

  // adiciona nota ao banco de dados
  const saveNote = () => {
    const id = uuidv4();
    const date = new Date().toUTCString();

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