import Header from '../components/Header';
import Button from '../components/Button';
import NotesPackage from '../components/NotesPackage';
import ConfirmModal from '../components/ConfirmModal';
import AddNoteInterface from '../components/AddNoteInterface'
import { SearchBox } from '../components/SearchBox';
import { HiPencil, HiPencilAlt } from 'react-icons/hi';
import { AddNoteButton } from '../styles/styles';
import { AddNoteInterfaceCore, ShowModal, trashNotesPicker } from '../scripts/core-functions';

import { useState, createContext, useEffect } from 'react';
import { retrieveNotes, setDataToStorage } from '../scripts/core-functions';

// cria uma variavel global de contexto
export const notesDataContext = createContext();

const Home = () => {
  const pencilAlt = <HiPencilAlt />;
  const { removeModal, removeNote, visible } = ShowModal();

  const data = retrieveNotes('notes');

  const {
    renderAddNoteInterface,
    removeAddNoteInterface,
    discardNote,
    interfaceStatus,
    getTextValue,
    getTitleValue,
    saveNote
  } = AddNoteInterfaceCore();

  const [searchValue, setSearchValue] = useState('');
  const [seachedNotes, setSearchedNotes] = useState([]);
  const searchEngine = (e) => {
    setSearchValue(() => e.target.value);
    
    const v = searchValue.toLowerCase();
    if (v.length >= 2) {
      const newNotesData = data.filter (elements => {
        if (elements.title.toLowerCase().includes(v) || elements.content.toLowerCase().includes(v)) {
          return elements;
        } else {
          return;
        }
      });
      setSearchedNotes(newNotesData);
    } else if (v.length <= 2) {
      setSearchedNotes(() => ([]));
    }
  }

  // deleta a nota e a move para o lixo
  const deleteNote = (e) => {
    const id = e.target.parentNode.parentNode.id;
    const trashNotes = trashNotesPicker();
    const trash = data.filter(note => {
      if (note.id === id) {
        return note;
      }
    });
    const notes = data.filter(note => {
      if (note.id !== id) {
        return note;
      }
    });
    setDataToStorage('notes', notes);
    trashNotes.push(trash[0]);
    setDataToStorage('trashData', trashNotes);
  }

  return (
    <>
      <Header title="Notes"
        child={<SearchBox inputEvent={searchEngine} />}
        icon={<HiPencil />}
      />
      <AddNoteButton>
        <Button className='addNoteButton'
          event={renderAddNoteInterface}
          icon={pencilAlt}
        />
      </AddNoteButton>

      <notesDataContext.Provider value={data}>
        <NotesPackage
          eventRemoveBtn={deleteNote}
          searchedNotes={seachedNotes}
        />
        <AddNoteInterface
          titleValue={getTitleValue}
          textValue={getTextValue}
          saveEvent={saveNote}
          cancelEvent={discardNote}
          interfaceExit={removeAddNoteInterface}
          status={interfaceStatus}
        />
      </notesDataContext.Provider>
      <ConfirmModal
        removeModal={removeModal}
        removeNote={removeNote}
        status={visible}
      />
    </>
  );
}

export default Home;