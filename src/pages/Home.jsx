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


import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const Home = () => {
  const pencilAlt = <HiPencilAlt />
  const { removeModal, renderConfirmModal, visible } = ShowModal();
  var notesData = retrieveNotes();
  // notesData = [];


  const [interfaceStatus, setInterfaceStatus] = useState(false);
  const [textValue, setTextValue ] = useState('');
  const [titleValue, setTitleValue] =  useState('');

  const AddNoteInterfaceCore = () => {
    
  }
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
    setTextValue('');
    setTitleValue('');
  }
  
  // adiciona nota ao banco de dados
  const saveNote = () => {
    const id = uuidv4()
    const newNote = {
      id,
      title: titleValue,
      content: textValue
    }

    if (newNote.title === '' || newNote.content === '')
    return;
    
    notesData.push(newNote)
    console.log(newNote)
    removeAddNoteInterface()
    return notesData;
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
        titleValue={e => getTitleValue(e)}
        textValue={e => getTextValue(e)}
        saveEvent={saveNote}
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