import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import AddNote from './pages/AddNote';
import Archive from './pages/Archive';
import Home from './pages/Home';
import Settings from './pages/Settings';

const Main = () => {	
	return (
		<>
			<Footer />
			<Routes>
				<Route path='/pages/Home' element={<Home />} />
				<Route path='/pages/AddNote'  element={<AddNote/>} />
				<Route path='/pages/Archive'  element={<Archive/>} />
				<Route path='/pages/Settings' element={<Settings/>} />
			</Routes>
		</>
	);
}

export default Main;
