import Header from '../components/Header';
import { SettingsContainer } from '../styles/SettingsStyles';
import ModeSwitcher from '../components/ModeSwitcher';
import ThemeOptions from '../components/ThemeOptions';
import SortOptions from '../components/SortOptions';
import About from '../components/About';
import { HiCog } from 'react-icons/hi';

export default function Settings() {
  const cogIcon = <HiCog/>;
  
  return (
    <SettingsContainer>
      <Header title={'Settings'} 
        icon={cogIcon}
      />
      <div className='settingsBody'>
        <ModeSwitcher text='Dark Mode (beta v0.0.3)' />
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