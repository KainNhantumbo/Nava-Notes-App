import { useState, useEffect, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from '../components/Header';
import Button from '../components/Button';
import NotesPackage from '../components/NotesPackage';
import ConfirmModal from '../components/ConfirmModal';
import AddNoteInterface from '../components/AddNoteInterface';
import EditNotesInterface from '../components/EditNotesInterface'
import Notification from '../components/Notification';
import { HiCheckCircle } from 'react-icons/hi';
import { FaEdit, FaFeather } from 'react-icons/fa';
import { AddNoteButton } from '../styles/styles';
import { ShowModal, trashNotesPicker } from '../scripts/core-functions';
import { timeSetter } from '../scripts/core-date';
import SearchBox from '../components/SearchBox';
import { retrieveNotes, setDataToStorage, sortNotes } from '../scripts/core-functions';

// search component context
export const searchContext = createContext()

const Home = () => {
  const { removeModal, removeNote, visible } = ShowModal();

  // estado do componente notificacao
  const [notificationStatus, setNotificationStatus] = useState(false);

  // pega os dados iniciais do localstorage
  const [unsortedData, setData] = useState([]);
  const data = sortNotes(unsortedData);
  useEffect(() => {
    setData(() => retrieveNotes('notes'));
  } ,[]);

  // cria a interface para criacao de novas notas
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
    const getTextValue = e => setTextValue(e.target.value);

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
        createdAt: date,
        date: new Date().toISOString()
      }

      if (newNote.title.length === 0) return;
      data.push(newNote);

      // salva a nota no localstorage
      setDataToStorage('notes', data);
      removeAddNoteInterface();
      return data;
    }

  // interface de edicao e previsualizacao de notas
    const [editInterfaceStatus, setEditInterfaceStatus] = useState(false);
    const [previewTitle, setPreviewTitle] = useState('');
    const [previewContent, setPreviewContent] = useState('');
    const [defaultNoteId, setDefaultNoteId] = useState('');
    const [defaultContetValue, setDefaultContetValue] = useState('');
    const [defaultTitleValue, setDefaultTitleValue] = useState('');
  
    // pega os valores atualizados
    const getDefaultContentValue = (e) => setDefaultContetValue(e.target.value);
    const getDefaultTitleValue = (e) => setDefaultTitleValue(e.target.value);
  
    // pega a nota para edicao
    const getDefaultNote = (e) => {
      const id = e.target.parentNode.parentNode.id;
      const tempNote = data.filter(element => {
        if (id === element.id)
        return element;
      });
      setPreviewTitle(() => tempNote[0].title);
      setPreviewContent(() => tempNote[0].content);
      setDefaultNoteId(() => tempNote[0].id);
    }

    // salva a nota editada
    const saveDefaultNote = () => {
      // transforma o array de objetos
      // insere novos dados na nota se tiver sido atualizada
      data.map(element => {
        if (element.id === defaultNoteId) {
          // verifica a existencia de conteudo da nota
          // se vazio, salva o conteudo original 
          if (defaultTitleValue && defaultContetValue) {
            element.title = defaultTitleValue;
            element.content = defaultContetValue;
          } else if (defaultTitleValue) {
            element.title = defaultTitleValue;
          } else if (defaultContetValue) {
            element.content = defaultContetValue;
          }
        }
      });

      setDataToStorage('notes', data);
      setData(() => retrieveNotes('notes'));
      setDefaultNoteId('');
      closeEditInterface();
      setDefaultTitleValue('');
      setDefaultContetValue('');
    }
  
    // renderiza a interface
    const renderEditInterface = (e) => {
      setEditInterfaceStatus(() => true);
      getDefaultNote(e);
    }

    // fecha a interface 
    const closeEditInterface = () => {
      setEditInterfaceStatus(() => false);
    };

  // pesquisa de notas 
    const [seachedNotes, setSearchedNotes] = useState([]);
    const searchEngine = (e) => {
      const value = e.target.value.toLowerCase();
      const newNotesData = data.filter(elements => {
        const notesTitle = elements.title.toLowerCase()
        const notesContent = elements.content.toLowerCase()
        if (notesTitle.includes(value) || notesContent.includes(value)) {
          return elements;
        } 
        return;
      });
      setSearchedNotes(newNotesData);
      
      if (value.length < 1) {
        setSearchedNotes(() => ([]));
      }
    }

  // eliminacao de notas
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

  // funcoes para gestao de notificao
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
        }, 3500);
      }
    }

  // renderizacao de componentes
  return (
    <>
      <searchContext.Provider value={searchEngine}>
        <Header title={'Notes'} child={<SearchBox/>} 
          icon={<FaEdit/>}        
        />
      </searchContext.Provider>

      <AddNoteButton>
        <Button className='addNoteButton'
          event={renderAddNoteInterface}
          icon={<FaFeather />}
        />
      </AddNoteButton>

      <NotesPackage
        eventRemoveBtn={deleteNote}
        eventDetailsBtn={renderEditInterface}
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

      <EditNotesInterface
        titleValue={getDefaultTitleValue}
        textValue={getDefaultContentValue}
        exitEvent={closeEditInterface}
        interfaceExit={closeEditInterface}
        status={editInterfaceStatus}
        inputValue={previewTitle}
        textAreaValue={previewContent}
        updateEvent={saveDefaultNote}
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