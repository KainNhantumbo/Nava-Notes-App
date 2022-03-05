import Header from '../components/Header';
import Button from '../components/Button';
import NotesPackage from '../components/NotesPackage';
import ConfirmModal from '../components/ConfirmModal';
import AddNoteInterface from '../components/AddNoteInterface';

import { SearchBox } from '../components/SearchBox';
import { retrieveNotes } from '../scripts/core-functions';
import { ShowModal } from '../scripts/core-functions';
import { HiPencil } from 'react-icons/hi';
import { HiPencilAlt } from 'react-icons/hi';
import { AddNoteButton } from '../styles/styles';

import { deleteNote } from '../scripts/core-functions';
import { AddNoteInterfaceCore } from '../scripts/core-functions';

const Home = () => {
  const pencilAlt = <HiPencilAlt />
  const { removeModal, removeNote, renderConfirmModal, visible } = ShowModal();
  var notesData = retrieveNotes();

  const {
    renderAddNoteInterface,
    removeAddNoteInterface,
    discardNote,
    interfaceStatus,
    getTextValue,
    getTitleValue,
    saveNote
  } = AddNoteInterfaceCore();
  
  return (
    <>
      {/* Header */}
      <Header title="Notes"
        child={<SearchBox />}
        icon={<HiPencil />}
      />
      <AddNoteButton>
        <Button className='addNoteButton'
        event={renderAddNoteInterface} 
          icon={pencilAlt} 
        />
      </AddNoteButton>

      {/* Main body */}
      <NotesPackage
        eventRemoveBtn={deleteNote} 
        notesData={notesData}
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