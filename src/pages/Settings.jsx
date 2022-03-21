import Header from '../components/Header';
import { SettingsContainer } from '../styles/SettingsStyles';
import ModeSwitcher from '../components/ModeSwitcher';
import ThemeOptions from '../components/ThemeOptions';
import SortOptions from '../components/SortOptions';
import About from '../components/About';
import UserUI from '../components/UserUI';
import { HiCog } from 'react-icons/hi';

export default function Settings() {
  console.log('state')
  
  return (
    <SettingsContainer>
      <Header title={'Settings'} 
        icon={<HiCog/>}
      />
      <div className='settingsBody'>
        <UserUI />

        <h2> Mode Switcher </h2>
        <ModeSwitcher text='Dark Mode (beta v0.0.4)' />
        <h2> Theme </h2>
        <ThemeOptions />
        <h2> Sort Notes </h2>
        <SortOptions />
        <h2> About </h2>
        <About />
      </div>
    </SettingsContainer>
  );
}