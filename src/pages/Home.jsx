import Header from '../components/Header';
import Button from '../components/Button';
import NotesPackage from '../components/NotesPackage';
import ConfirmModal from '../components/ConfirmModal';
import AddNoteInterface from '../components/AddNoteInterface'
import { SearchBox } from '../components/SearchBox';
import { HiPencil, HiPencilAlt } from 'react-icons/hi';
import { AddNoteButton } from '../styles/styles';
import { deleteNote, AddNoteInterfaceCore, ShowModal } from '../scripts/core-functions';

import { useState } from 'react';
import { getDataFromStorage } from '../scripts/core-functions';

const Home = () => {
  const pencilAlt = <HiPencilAlt />;
  const { removeModal, removeNote, visible } = ShowModal();

  const {
    renderAddNoteInterface,
    removeAddNoteInterface,
    discardNote,
    interfaceStatus,
    getTextValue,
    getTitleValue,
    saveNote
  } = AddNoteInterfaceCore();

  const [value, setValue] = useState('')
  const searchEngine = (e) => {
    setValue(() => e.target.value)
    var notesData = getDataFromStorage('notes');

    const v = value.trim().toLowerCase();

    if (v !== '') {
      const newNotesData = notesData.map(element => {
        if (element.title.toLowerCase().indexOf(v) || element.content.toLowerCase().indexOf(v) != -1) {
          return element
        }
      })
      console.log(newNotesData)
    }


    console.log(v)
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
      <ConfirmModal
        removeModal={removeModal}
        removeNote={removeNote}
        status={visible}
      />
    </>
  );
}

export default Home;