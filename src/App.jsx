import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Archive from './pages/Archive';
import Settings from './pages/Settings';

import Header from './components/Header';
import { SearchBox } from './components/SearchBox';
import NotesPackage from './components/NotesPackage';
import ConfirmModal from './components/ConfirmModal';
import { retrieveNotes } from './scripts/functions';
import { ShowModal } from './scripts/functions';

const App = () => {
	const { removeModal, renderConfirmModal, visible } = ShowModal();
	var notesData = retrieveNotes();
	// notesData = [];
	
	console.log(notesData)
	// controla o modal de confirmacao ao deletar nota


	return (
		<>
			<Header title="Notes" 
				child={<SearchBox />}
			/>
			<NotesPackage 
				eventRemoveBtn={renderConfirmModal} 
				notesData={notesData}
			/>
			<ConfirmModal 
				removeModal={removeModal}
				status={visible}
			/>

			<Footer />
			<Routes>
				<Route path='/pages/Archive' element={<Archive />} />
				<Route path='/pages/Settings' element={<Settings />} />
			</Routes>
		</>
	);
}

export default App;
