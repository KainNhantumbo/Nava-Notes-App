import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Archive from './pages/Archive';
import Settings from './pages/Settings';
import Home from './pages/Home';

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/pages/Archive' element={<Archive />} />
				<Route path='/pages/Settings' element={<Settings />} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;
