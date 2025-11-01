import { HiSun } from 'react-icons/hi';
import { ModeSwitcherStyles as Container } from '../styles/modeSwitcher';
import { useThemeContext } from '../context/ThemeContext';

const ModeSwitcher = ({ text }) => {
  const { changeTheme, themeMode } = useThemeContext();

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
          checked={themeMode == 'light' ? false : true}
        />
      </div>
    </Container>
  );
};

export default ModeSwitcher;
