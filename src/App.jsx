import { Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styles/globalstyles';
import Trash from './pages/Trash';
import Settings from './pages/Settings';
import Home from './pages/Home';
import Footer from './components/Footer';
import { setDataToStorage, modeDataPicker } from './scripts/core-functions';
import { ThemeProvider } from 'styled-components';
import React, { useState, useEffect, createContext } from 'react';
import { darkTheme, lightTheme } from './styles/colors';

export const ThemeContext = createContext();

const App = () => {
	const [theme, setTheme] = useState(lightTheme);

	// changes the theme
	const changeTheme = () => {
		setTheme(() => {
			if (theme === lightTheme) {
				return darkTheme;
			}
			return lightTheme;
		});
		console.log(theme);
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
