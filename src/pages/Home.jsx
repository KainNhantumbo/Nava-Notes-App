import Header from '../components/Header';
import Button from '../components/Button';
import NotesPackage from '../components/NotesPackage';
import ConfirmModal from '../components/ConfirmModal';
import AddNoteInterface from '../components/AddNoteInterface'
import { SearchBox } from '../components/SearchBox';
import { HiPencil, HiPencilAlt } from 'react-icons/hi';
import { AddNoteButton } from '../styles/styles';
import { deleteNote, AddNoteInterfaceCore, ShowModal } from '../scripts/core-functions';

import { useState, createContext } from 'react';
import { retrieveNotes } from '../scripts/core-functions';

// cria uma variavel global de contexto
export const notesDataContext = createContext();

const Home = () => {
  const pencilAlt = <HiPencilAlt />;
  const { removeModal, removeNote, visible } = ShowModal();

  const data = retrieveNotes('notes');
  const [notesData, setNotesData] = useState(data);

  const {
    renderAddNoteInterface,
    removeAddNoteInterface,
    discardNote,
    interfaceStatus,
    getTextValue,
    getTitleValue,
    saveNote
  } = AddNoteInterfaceCore();

  const [value, setValue] = useState('');
  const searchEngine = (e) => {
    setValue(() => e.target.value);

    const v = value.trim().toLowerCase();
    const newNotesData = notesData.filter(elements => {
      if (elements.title.toLowerCase().includes(v) ||
        elements.content.toLowerCase().includes(v)
      )
      return elements;
    });
    return newNotesData;
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

      <notesDataContext.Provider value={notesData}>
        <NotesPackage
          eventRemoveBtn={deleteNote}
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