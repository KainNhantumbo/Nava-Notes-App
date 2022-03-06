import Header from '../components/Header';
import { SettingsContainer } from '../styles/SettingsStyles';
import { ModeSwitcherStyles } from '../styles/SettingsStyles';
import ModeSwitcher from '../components/ModeSwitcher';
import CheckBox from '../components/CheckBox';
import ThemeOptions from '../components/ThemeOptions';
import SortOptions from '../components/SortOptions';

export default function Settings({ onChangeEvent }) {

  return (
    <SettingsContainer>
      <Header title={'Settings'} />
      <div className='settingsBody'>
        <ModeSwitcherStyles>
          <ModeSwitcher text='Dark Mode'
            action={<CheckBox event={onChangeEvent} />}
          />
        </ModeSwitcherStyles>
        <h2> Theme </h2>
        <ThemeOptions />
        <h2> Sort Notes </h2>
        <SortOptions />
      </div>
    </SettingsContainer>
  );
}