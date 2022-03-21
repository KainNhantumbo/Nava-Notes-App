import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import TrashNotesPackage from '../components/TrashNotesPackage';
import { HiFire } from 'react-icons/hi';
import { HiTrash } from 'react-icons/hi';
import { setDataToStorage, sortNotes, trashNotesPicker, retrieveNotes } from '../scripts/core-functions';

const Trash = () => {
  // pega as notas do localstorage
  const [ notesData, setNotesData ] = useState([]);
  useEffect(() => {
    setNotesData(() => retrieveNotes('notes'));
  }, []);

  // carrega os dados do localstorage
  const [unsortedTrashData, setUnsortedTrashData] = useState([]);
  const trashData = sortNotes(unsortedTrashData);
  useEffect(() => {
    setUnsortedTrashData(() => trashNotesPicker());
  }, []);

  // apaga permanentemente todas as notas do lixo
  const trashReseter = () => {
    var trash = [];
    setDataToStorage('trashData', trash);
    setUnsortedTrashData(() => trashNotesPicker());
  }

  // restaura do lixo a nota selecionada
  const restoreNote = (e) => {
    const id = e.target.parentNode.parentNode.id;
    const trashNote = trashData.filter(note => {
      if (note.id === id) {
        return note;
      }
    });
    const notes = trashData.filter(note => {
      if (note.id !== id) {
        return note;
      }
    });
    notesData.push(trashNote[0]);
    setDataToStorage('notes', notesData);
    setDataToStorage('trashData', notes);
    setUnsortedTrashData(() => trashNotesPicker());
  }

  const permanentDelete = (e) => {
    const id = e.target.parentNode.parentNode.id;
    const trashNotes = trashData.filter(note => {
      if (note.id !== id) {
        return note;
      }
    });
    setDataToStorage('trashData', trashNotes);
    setUnsortedTrashData(() => trashNotesPicker());
  }
  
  return (
    <>
      <Header title={'Trash'}
        child={<Button
          description='Permanently Delete All'
          icon={<HiFire/>}
          event={trashReseter}  
        />}
        icon={<HiTrash />}
      />
      <TrashNotesPackage 
        eventRestore={restoreNote}
        eventDelete={permanentDelete}
        trashNotes={trashData}
      />
    </>
  );
}

export default Trash;