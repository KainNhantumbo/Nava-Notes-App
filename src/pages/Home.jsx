import Header from '../components/Header';
import NotesPackage from '../components/NotesPackage';
import ConfirmModal from '../components/ConfirmModal';
import { retrieveNotes } from '../scripts/functions';
import { ShowModal } from '../scripts/functions';

const Home = () => {

  const { removeModal, renderConfirmModal, visible } = ShowModal();
	var notesData = retrieveNotes();
	// notesData = [];
	
	console.log(notesData)
	// controla o modal de confirmacao ao deletar nota

  return (
    <>
      <Header title="Notes"/>
			<NotesPackage 
				eventRemoveBtn={renderConfirmModal} 
				notesData={notesData}
			/>
			<ConfirmModal 
				removeModal={removeModal}
				status={visible}
			/>
    </>
  );
}

export default Home;