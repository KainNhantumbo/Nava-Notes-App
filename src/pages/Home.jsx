import Header from '../components/Header';
import Button from '../components/Button';
import NotesPackage from '../components/NotesPackage';
import ConfirmModal from '../components/ConfirmModal';
import AddNoteInterface from '../components/AddNoteInterface';
import Notification from '../components/Notification';
import { SearchBox } from '../components/SearchBox';
import { HiPencil, HiPencilAlt, HiCheckCircle } from 'react-icons/hi';
import { AddNoteButton } from '../styles/styles';
import { ShowModal, trashNotesPicker } from '../scripts/core-functions';
import { v4 as uuidv4 } from 'uuid';
import { timeSetter } from '../scripts/core-date';

import { useState, useEffect } from 'react';
import { retrieveNotes, setDataToStorage, sortNotes } from '../scripts/core-functions';

const Home = () => {
  const { removeModal, removeNote, visible } = ShowModal();
  
  // estado do componente notificacao
  const [notificationStatus, setNotificationStatus] = useState(false);
  
  // pega os dados iniciais do localstorage
  const [unsortedData, setData] = useState([]);
  const data = sortNotes(unsortedData);
  useEffect(() => {
    setData(() => retrieveNotes('notes'));
  }, []);


  // cria a interface para adicao de notas
  const [interfaceStatus, setInterfaceStatus] = useState(false);
  const [titleValue, setTitleValue] = useState(() => '');
  const [textValue, setTextValue] = useState(() => ``);

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
  const getTextValue = e => setTextValue(`${e.target.value}`);

  // reseta os valores do state
  const resetValues = () => {
    setTextValue(() => '');
    setTitleValue(() => '');
  }

  // adiciona nota ao banco de dados
  const saveNote = () => {
    const id = uuidv4();
    const date = timeSetter();

    const newNote = {
      id,
      title: titleValue,
      content: textValue,
      createdAt: date
    }

    if (newNote.title.length === 0) return;
    data.push(newNote);

    // salva a nota no localstorage
    setDataToStorage('notes', data)
    removeAddNoteInterface()
    return data;
  }

  const [searchValue, setSearchValue] = useState('');
  const [seachedNotes, setSearchedNotes] = useState([]);
  const searchEngine = (e) => {
    setSearchValue(() => e.target.value);

    const v = searchValue.toLowerCase();
    if (v.length >= 2) {
      const newNotesData = data.filter(elements => {
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
    setData(() => retrieveNotes('notes'));
    setNotificationStatus(() => true);
    removeNotificationByDelay(notificationStatus);
  }

  // remove a notificacao pelo botao
  const removeNotification = () => {
    setNotificationStatus(() => false);
  }

  // remove a notificacao por delay
  const removeNotificationByDelay = (status) => {
    if (status === true) {
      return;
    } else {  
      setTimeout(() => {
        setNotificationStatus(() => false);
      }, 5000);
    }
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
          icon={<HiPencilAlt />}
        />
      </AddNoteButton>

      <NotesPackage
        eventRemoveBtn={deleteNote}
        searchedNotes={seachedNotes}
        notesData={data}
      />

      <AddNoteInterface
        titleValue={getTitleValue}
        textValue={getTextValue}
        saveEvent={saveNote}
        cancelEvent={discardNote}
        interfaceExit={removeAddNoteInterface}
        status={interfaceStatus}
      />

      <Notification
        status={notificationStatus}
        textContent={"Moved to trash"}
        btnDescription={"Desmiss"}
        btnEvent={removeNotification}
        icon={<HiCheckCircle />}
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