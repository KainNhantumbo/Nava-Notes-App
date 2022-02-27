import Header from '../components/Header';
import { SettingsContainer } from '../styles/SettingsStyles';
import OptionBox from '../components/OptionBox';
import CheckBox from '../components/CheckBox';
import ThemeOptions from '../components/ThemeOptions';

export default function Settings ({ onChangeEvent }) {

  return (
    <>
      <Header title={'Settings'} />
      <SettingsContainer>
        <OptionBox text='Dark Mode'
         action={<CheckBox event={onChangeEvent} />}
        />
      </SettingsContainer>
      <ThemeOptions />
    </>
  );
}