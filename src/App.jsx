import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globalstyles';
import { colors, fakeDark, fakeLight } from './styles/colors';
import Trash from './pages/Trash';
import Settings from './pages/Settings';
import Home from './pages/Home';
import Footer from './components/Footer';
import { useState, useEffect, createContext } from 'react';
import { getDataFromStorage } from './scripts/core-functions';

const App = () => {
	const [themeState, setThemeState] = useState('light')
	useEffect(() => {
		setThemeState(() => getDataFromStorage('modeData'))		
	});

	const switchTheme = (theme) => {
		if (theme === 'light')
		return fakeLight
		return fakeDark
	}

	return (
		<>
			<ThemeProvider theme={switchTheme(themeState)}>
				<GlobalStyles />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/pages/Trash' element={<Trash />} />
					<Route path='/pages/Settings' element={<Settings />} />
				</Routes>

				<Footer />
			</ThemeProvider>
		</>
	);
}

export default App;
