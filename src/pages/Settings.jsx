import Header from '../components/Header';
import { SettingsContainer } from '../styles/settings';
import ModeSwitcher from '../components/ModeSwitcher';
import ThemeOptions from '../components/ThemeOptions';
import SortOptions from '../components/SortOptions';
import About from '../components/About';
import UserUI from '../components/UserUI';
import { HiCog } from 'react-icons/hi';

export default function Settings() {
  return (
    <SettingsContainer>
      <Header title={'Settings'} 
        icon={<HiCog/>}
      />
      <div className='settingsBody'>
        <UserUI />

        <h2> Mode Switcher </h2>
        <ModeSwitcher text='Dark Mode (beta: requires reload)' />

        <h2> Sort Notes </h2>
        <SortOptions />
        <h2> About </h2>
        <About />
      </div>
    </SettingsContainer>
  );
}