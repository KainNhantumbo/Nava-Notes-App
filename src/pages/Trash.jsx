import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import TrashNotesPackage from '../components/TrashNotesPackage';
import { HiFire } from 'react-icons/hi';
import { trashNotesPicker, retrieveNotes, setDataToStorage } from '../scripts/core-functions';

const Trash = () => {
  const fireIcon = <HiFire/>;
  const trashData = trashNotesPicker();
  const notesData = retrieveNotes();

  const trashReseter = () => {
    var trash = [];
    setDataToStorage('trashData', trash);
  }

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
  }

  const permanentDelete = (e) => {
    const id = e.target.parentNode.parentNode.id;
    const trashNotes = trashData.filter(note => {
      if (note.id !== id) {
        return note;
      }
    });
    setDataToStorage('trashData', trashNotes);
  }
  
  return (
    <>
      <Header title={'Trash'}
        child={<Button
          description='Permanently Delete All'
          icon={fireIcon}
          event={trashReseter}  
        />}
      />
      <TrashNotesPackage 
        eventRestore={restoreNote}
        eventDelete={permanentDelete}
      />
    </>
  );
}

export default Trash;