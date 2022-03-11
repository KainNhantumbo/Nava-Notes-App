import { Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styles/globalStyles';
import Trash from './pages/Trash';
import Settings from './pages/Settings';
import Home from './pages/Home';
import Footer from './components/Footer';

const App = () => {
	return (
		<>
			<GlobalStyles/>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/pages/Trash' element={<Trash />} />
				<Route path='/pages/Settings' element={<Settings />} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;
