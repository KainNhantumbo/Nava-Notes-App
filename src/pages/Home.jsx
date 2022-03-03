import Header from '../components/Header';
import { SearchBox } from '../components/SearchBox';
import NotesPackage from '../components/NotesPackage';
import ConfirmModal from '../components/ConfirmModal';
import { retrieveNotes } from '../scripts/functions';
import { ShowModal } from '../scripts/functions';
import AddNote from '../components/AddNote';
import { HiPencil } from 'react-icons/hi';
import AddNoteInterface from '../components/AddNoteInterface';


const Home = () => {
  const { removeModal, renderConfirmModal, visible } = ShowModal();
  var notesData = retrieveNotes();
  // notesData = [];


  // controla o modal de confirmacao ao deletar nota

  return (
    <>
      <Header title="Notes"
        child={<SearchBox />}
        icon={<HiPencil />}
      />
      <NotesPackage
        eventRemoveBtn={renderConfirmModal}
        notesData={notesData}
      />
      <AddNoteInterface />
      <ConfirmModal
        removeModal={removeModal}
        status={visible}
      />
    </>
  );
}

export default Home;