import Header from '../components/Header';
import { SettingsContainer } from '../styles/styles';
import OptionBox from '../components/OptionBox';
import CheckBox from '../components/CheckBox';

export default function Settings ({ onChangeEvent }) {

  return (
    <>
      <Header title={'Settings'} />
      <SettingsContainer>
        <OptionBox text='Dark Mode'
         action={<CheckBox event={onChangeEvent} />}
        />
      </SettingsContainer>
    </>
  );
}