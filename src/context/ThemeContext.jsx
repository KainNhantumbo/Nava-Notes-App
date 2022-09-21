import { useContext, createContext, useState } from 'react';
import { darkTheme, lightTheme } from '../styles/colors';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/globalstyles';

const context = createContext({});

export default function ThemeContext(props) {
	// picks theme configuration from localStorage
	const themeModePicker = () => {
		let mode = JSON.parse(localStorage.getItem('mode'));
		if (!mode || mode === undefined) {
			mode = 'light';
			localStorage.setItem('mode', JSON.stringify(mode));
		}
		return mode;
	};
	const themeMode = themeModePicker();

	const [theme, setTheme] = useState(() => {
		if (themeMode == 'light') {
			return lightTheme;
		}
		return darkTheme;
	});

	// changes the theme
	const changeTheme = () => {
		if (themeMode === 'light') {
			setTheme(() => darkTheme);
			localStorage.setItem('mode', JSON.stringify('dark'));
			return;
		}
		setTheme(() => lightTheme);
		localStorage.setItem('mode', JSON.stringify('light'));
	};

	return (
		<context.Provider value={{ changeTheme, themeMode }}>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				{props.children}
			</ThemeProvider>
		</context.Provider>
	);
}

export const useThemeContext = () => {
	const data = useContext(context);
	return data;
};
