import { ModeSwitcherStyles } from '../styles/modeSwitcher';
import { HiSun } from 'react-icons/hi';
import { useContext } from 'react';
import { useThemeContext } from '../context/ThemeContext';

const ModeSwitcher = ({ text }) => {
	const { changeTheme } = useThemeContext();

	// defines the checkbox state based on saved theme
	const checkboxState = () => {
		const mode = JSON.parse(localStorage.getItem('mode'));
		if (mode === 'light') return false;
		return true;
	};

	return (
		<ModeSwitcherStyles>
			<div>
				<label htmlFor='modeswitcher'>
					{text}
					<HiSun />
				</label>
				<input
					type='checkbox'
					id='modeswitcher'
					onChange={changeTheme}
					checked={checkboxState()}
				/>
			</div>
		</ModeSwitcherStyles>
	);
};

export default ModeSwitcher;
