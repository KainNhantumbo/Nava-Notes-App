import OptionBox from './OptionBox';
import Button from './Button';

export default function AddNote({ event }) {
	return <OptionBox text='Add Note' action={<Button event={event} />} />;
}
