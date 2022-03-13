import { Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styles/globalStyles';
import Trash from './pages/Trash';
import Settings from './pages/Settings';
import Home from './pages/Home';
import Footer from './components/Footer';
import { createContext, useEffect, useState } from 'react';
import { retrieveNotes, trashNotesPicker, setDataToStorage } from './scripts/core-functions';

// variaveis globais de contexto
export const dataContext = createContext();

const App = () => {
	const data = retrieveNotes();
	const datatras = trashNotesPicker();
	const [trashData, setTrashData] = useState(datatras);
  const [notesData, setNotesData ] = useState(data);

  // notesData Hooks
  useEffect(()=> {
    
    // setDataToStorage('trashData', trashData)
    console.log(data)
		// setNotesData(() => data)
  }, [notesData])

  // trashData Hooks
  useEffect(()=> {
    
    console.log(data)
  }, [trashData])

	return (
		<>
			<dataContext.Provider value={[notesData, trashData]}>
				<GlobalStyles />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/pages/Trash' element={<Trash />} />
					<Route path='/pages/Settings' element={<Settings />} />
				</Routes>

				<Footer />
			</dataContext.Provider>
		</>
	);
}

export default App;
