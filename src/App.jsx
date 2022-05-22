import { Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styles/globalstyles';
import Trash from './pages/Trash';
import Settings from './pages/Settings';
import Home from './pages/Home';
import Footer from './components/Footer';
import { ThemeProvider } from 'styled-components';
import React, { useState, createContext } from 'react';
import { darkTheme, lightTheme } from './styles/colors';

export const ThemeContext = createContext();

const App = () => {
	// picks theme configuration from localStorage
	const themeDataPicker = () => {
		let themeMode = JSON.parse(localStorage.getItem('mode'));
		if (!themeMode || themeMode === undefined) {
			themeMode = 'light';
			localStorage.setItem('mode', JSON.stringify(themeMode));
		}
		return themeMode;
	};
	const themeData = themeDataPicker();
	const [theme, setTheme] = useState(() => {
		if (themeData == 'light') {
			return lightTheme;
		}
		return darkTheme;
	});

	// changes the theme
	const changeTheme = () => {
		if (themeData === 'light') {
			setTheme(() => darkTheme);
			localStorage.setItem('mode', JSON.stringify('dark'));
			return;
		}
		setTheme(() => lightTheme);
		localStorage.setItem('mode', JSON.stringify('light'));
	};

	return (
		<ThemeContext.Provider value={{ changeTheme }}>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/pages/Trash' element={<Trash />} />
					<Route path='/pages/Settings' element={<Settings />} />
				</Routes>
				<Footer />
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};

export default App;
