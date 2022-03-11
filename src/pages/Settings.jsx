import Header from '../components/Header';
import { SettingsContainer } from '../styles/SettingsStyles';
import ModeSwitcher from '../components/ModeSwitcher';
import ThemeOptions from '../components/ThemeOptions';
import SortOptions from '../components/SortOptions';

export default function Settings() {
  return (
    <SettingsContainer>
      <Header title={'Settings'} />
      <div className='settingsBody'>
        <ModeSwitcher text='Dark Mode (beta v0.0.3)' />
        <h2> Theme </h2>
        <ThemeOptions />
        <h2> Sort Notes </h2>
        <SortOptions />
      </div>
    </SettingsContainer>
  );
}