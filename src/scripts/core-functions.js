import { useState } from "react";

//controla o comportamento do modal de confirmacao
export function ShowModal() {
  const [visible, setVisible] = useState(false)

  const renderConfirmModal = (e) => {
    const id = e.target.parentNode.parentNode.id;
    setVisible(true);
  }
  const removeModal = () => setVisible(false);

  return {
    renderConfirmModal,
    removeModal,
    visible
  }
}

// salva os dados no localStorage
export const setDataToStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
}

//carrega os dados do localStorage
export const getDataFromStorage = (key) => {
  const data = JSON.parse(localStorage.getItem(key));
  return data;
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