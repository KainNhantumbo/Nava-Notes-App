import TextArea from './TextArea';
import { HiPencilAlt } from 'react-icons/hi';
import OptionBox from './OptionBox';
import Button from './Button';

export default function AddNote ({ event }) {
  const pencilIcon = <HiPencilAlt />

  return (
    <>
      <OptionBox text='Add Note' 
        action={<Button event={event} />} 
      />
    </>
  );
}