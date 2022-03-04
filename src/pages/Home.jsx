import Header from '../components/Header';
import Button from '../components/Button';
import NotesPackage from '../components/NotesPackage';
import ConfirmModal from '../components/ConfirmModal';
import AddNoteInterface from '../components/AddNoteInterface';

import { SearchBox } from '../components/SearchBox';
import { retrieveNotes } from '../scripts/functions';
import { ShowModal } from '../scripts/functions';
import { HiPencil } from 'react-icons/hi';
import { HiPencilAlt } from 'react-icons/hi';
import { AddNoteButton } from '../styles/styles';


import { useState } from 'react';


const Home = () => {
  const pencilAlt = <HiPencilAlt />
  const { removeModal, renderConfirmModal, visible } = ShowModal();
  var notesData = retrieveNotes();
  // notesData = [];


  const [interfaceStatus, setInterfaceStatus] = useState(false);

  const AddNoteInterfaceCore = () => {
    
  }

  const renderAddNoteInterface = () => setInterfaceStatus(true);
  const removeAddNoteInterface = () => setInterfaceStatus(false);

  const discardNote = () => {

    setInterfaceStatus(false);
  }

  const saveNote = () => {
    
  }

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
        eventRemoveBtn={renderConfirmModal}
        notesData={notesData}
      />
      <AddNoteInterface
        cancelEvent={discardNote}
        interfaceExit={removeAddNoteInterface}
        status={interfaceStatus}
      />
      <ConfirmModal
        removeModal={removeModal}
        status={visible}
      />
    </>
  );
}



export default Home;