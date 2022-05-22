import { ModeSwitcherStyles } from '../styles/modeSwitcher';
import { HiSun } from 'react-icons/hi';
import { useContext } from 'react';
import { ThemeContext } from '../App';

const ModeSwitcher = ({ text }) => {
	const { changeTheme } = useContext(ThemeContext);

	return (
		<ModeSwitcherStyles>
			<div>
				<label htmlFor='modeswitcher'>
					{text}
					<HiSun />
				</label>
				<input type='checkbox' id='modeswitcher' onChange={changeTheme} />
			</div>
		</ModeSwitcherStyles>
	);
};

export default ModeSwitcher;
