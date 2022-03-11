import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Trash from './pages/Trash';
import Settings from './pages/Settings';
import Home from './pages/Home';
import { GlobalStyles } from './styles/globalStyles';

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/pages/Trash' element={<Trash />} />
				<Route path='/pages/Settings' element={<Settings />} />
			</Routes>

			<GlobalStyles/>
			<Footer />
		</>
	);
}

export default App;
