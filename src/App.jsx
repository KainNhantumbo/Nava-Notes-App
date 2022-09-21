import { Route, Routes } from 'react-router-dom';
import Trash from './pages/Trash';
import Settings from './pages/Settings';
import Home from './pages/Home';
import Footer from './components/Footer';
import ThemeContext from './context/ThemeContext';

const App = () => {
	return (
		<ThemeContext>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/pages/Trash' element={<Trash />} />
				<Route path='/pages/Settings' element={<Settings />} />
			</Routes>
			<Footer />
		</ThemeContext>
	);
};

export default App;
