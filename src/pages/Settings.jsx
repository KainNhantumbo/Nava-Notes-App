import Header from '../components/Header';
import ModeSwitcher from '../components/ModeSwitcher';
import SortOptions from '../components/SortOptions';
import About from '../components/About';
import { FaCogs } from 'react-icons/fa';
import { SettingsContainer as Container } from '../styles/settings';

export default function Settings() {
	return (
		<Container>
			<Header title={'Settings'} icon={<FaCogs />} />
			<div className='settingsBody'>
				<h2> Mode Switcher </h2>
				<ModeSwitcher text='Dark Mode' />

				<h2> Sort Notes </h2>
				<SortOptions />

				<h2> About </h2>
				<About />
			</div>
		</Container>
	);
}
