import { HiFire, HiCheckCircle } from 'react-icons/hi';
import { FaTrashAlt } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import {
  setDataToStorage,
  sortNotes,
  trashNotesPicker,
  retrieveNotes
} from '../scripts/core-functions';
import Header from '../components/Header';
import TrashNotesPackage from '../components/TrashNotesPackage';
import Notification from '../components/Notification';
import ConfirmModal from '../components/ConfirmModal';
import { useState, useEffect } from 'react';

export default function Trash() {
  // confirm modal states
  const [modalState, setModalState] = useState(false);

  // pega as notas do localstorage
  const [notesData, setNotesData] = useState([]);
  useEffect(() => {
    setNotesData(() => retrieveNotes('notes'));
  }, []);

  // carrega os dados do localstorage
  const [unsortedTrashData, setUnsortedTrashData] = useState([]);
  const trashData = sortNotes(unsortedTrashData);
  useEffect(() => {
    setUnsortedTrashData(() => trashNotesPicker());
  }, []);

  // estados componente Notification
  const [notificationIcon, setNotificationIcon] = useState(() => {
    return <HiCheckCircle />;
  });
  const [notificationInfo, setNotificationInfo] = useState('Sucess');
  const [notificationStatus, setNotificationStatus] = useState(false);

  // apaga permanentemente todas as notas do lixo
  const trashReseter = () => {
    var trash = [];
    setDataToStorage('trashData', trash);
    setUnsortedTrashData(() => trashNotesPicker());
    // configuração da notificação
    configNotification('Wiped!', <MdDeleteForever />);
    setNotificationStatus(() => true);
    removeNotificationByDelay(notificationStatus);
  };

  // restaura do lixeira a nota selecionada
  const restoreNote = (e) => {
    const id = e.target.parentNode.parentNode.id;
    const [trash_note] = trashData.filter((note) => {
      if (note.id === id) {
        return note;
      }
    });
    const notes = trashData.filter((note) => {
      if (note.id !== id) {
        return note;
      }
    });
    notesData.push(trash_note);
    setDataToStorage('notes', notesData);
    setDataToStorage('trashData', notes);
    setUnsortedTrashData(() => trashNotesPicker());

    // configuração da notificação
    configNotification('Restored', <HiCheckCircle />);
    setNotificationStatus(() => true);
    removeNotificationByDelay(notificationStatus);
  };

  // apaga permanentemente todas as notas da lixeira
  const permanentDelete = (e) => {
    const id = e.target.parentNode.parentNode.id;
    const trashNotes = trashData.filter((note) => {
      if (note.id !== id) {
        return note;
      }
    });
    setDataToStorage('trashData', trashNotes);
    setUnsortedTrashData(() => trashNotesPicker());

    // configuração da notificação
    configNotification('Deleted', <MdDeleteForever />);
    setNotificationStatus(() => true);
    removeNotificationByDelay(notificationStatus);
  };

  const removeNotification = () => {
    setNotificationStatus(() => false);
  };

  const removeNotificationByDelay = (status) => {
    if (status) return;
    setTimeout(() => {
      setNotificationStatus(() => false);
    }, 3500);
  };

  const configNotification = (info, icon) => {
    setNotificationInfo(() => info);
    setNotificationIcon(() => icon);
  };

  return (
    <>
      <Header
        title={'Trash'}
        child={
          <button
            onClick={(e) => {
              setModalState(true);
            }}>
            <HiFire />
            <span>Permanently Delete All</span>
          </button>
        }
        icon={<FaTrashAlt />}
      />
      <TrashNotesPackage
        eventRestore={restoreNote}
        eventDelete={permanentDelete}
        trashNotes={trashData}
      />

      <Notification
        status={notificationStatus}
        textContent={notificationInfo}
        btnDescription={'Desmiss'}
        btnEvent={removeNotification}
        icon={notificationIcon}
      />
      <ConfirmModal
        status={modalState}
        accept={(e) => {
          trashReseter();
          setModalState((prevState) => !prevState);
        }}
        deny={(e) => {
          setModalState((prevState) => !prevState);
        }}
      />
    </>
  );
}
