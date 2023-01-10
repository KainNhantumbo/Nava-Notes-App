import { HiSun } from 'react-icons/hi';
import { ModeSwitcherStyles as Container} from '../styles/modeSwitcher';
import { useThemeContext } from '../context/ThemeContext';

const ModeSwitcher = ({ text }) => {
	const { changeTheme, themeMode } = useThemeContext();
	const checkboxState = () => (themeMode == 'light' ? false : true);

	return (
		<Container>
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
		</Container>
	);
};

export default ModeSwitcher;
