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


const Home = () => {
  const pencilAlt = <HiPencilAlt/>
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
      <Button className='addNoteButton' icon={pencilAlt}/>
      
      <NotesPackage
        eventRemoveBtn={renderConfirmModal}
        notesData={notesData}
      />
      {/* <AddNoteInterface /> */}
      <ConfirmModal
        removeModal={removeModal}
        status={visible}
      />
    </>
  );
}



export default Home;