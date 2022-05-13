import Header from '../components/Header';
import { SettingsContainer } from '../styles/settings';
import ModeSwitcher from '../components/ModeSwitcher';
import SortOptions from '../components/SortOptions';
import About from '../components/About';
import UserUI from '../components/UserUI';
import { FaCogs } from 'react-icons/fa';

export default function Settings() {
	return (
		<SettingsContainer>
			<Header title={'Settings'} icon={<FaCogs />} />
			<div className='settingsBody'>
				<UserUI />

				<h2> Mode Switcher </h2>
				<ModeSwitcher text='Dark Mode' />

				<h2> Sort Notes </h2>
				<SortOptions />

				<h2> About </h2>
				<About />
			</div>
		</SettingsContainer>
	);
}
