import Header from '../components/Header';
import { SettingsContainer } from '../styles/SettingsStyles';
import { ModeSwitcher } from '../styles/SettingsStyles';
import OptionBox from '../components/OptionBox';
import CheckBox from '../components/CheckBox';
import ThemeOptions from '../components/ThemeOptions';
import SortOptions from '../components/SortOptions';

export default function Settings({ onChangeEvent }) {

  return (
    <SettingsContainer>
      <Header title={'Settings'} />
      <div className='settingsBody'>
        <ModeSwitcher>
          <OptionBox text='Dark Mode'
            action={<CheckBox event={onChangeEvent} />}
          />
        </ModeSwitcher>
        <h2> Theme </h2>
        <ThemeOptions />
        <h2> Sort </h2>
        <SortOptions />
      </div>
    </SettingsContainer>
  );
}