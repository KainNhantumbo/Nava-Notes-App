import { useContext, createContext, useState, useEffect } from 'react';
import { darkTheme, lightTheme } from '../styles/colors';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/globalstyles';

const context = createContext({});

export default function ThemeContext(props) {
  
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

	useEffect(() => {}, []);

	return (
		<context.Provider value={{ changeTheme }}>
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
