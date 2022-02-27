import Header from '../components/Header';
import { SettingsContainer } from '../styles/SettingsStyles';
import { ModeSwitcher  } from '../styles/SettingsStyles';
import OptionBox from '../components/OptionBox';
import CheckBox from '../components/CheckBox';
import ThemeOptions from '../components/ThemeOptions';

export default function Settings ({ onChangeEvent }) {

  return (
    <SettingsContainer>
      <Header title={'Settings'} />

      <ModeSwitcher>
        <OptionBox text='Dark Mode'
         action={<CheckBox event={onChangeEvent} />}
        />
      </ModeSwitcher>

      <h2> Theme Options </h2>

      <ThemeOptions/>
      
    </SettingsContainer>
  );
}