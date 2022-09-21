import { InterfaceStyles } from '../styles/addNotesInterface';
import LargerButtons from './LargerButtons';
import TextArea from './TextArea';
import Button from './Button';
import { HiChevronLeft, HiSave, HiX } from 'react-icons/hi';

const AddNoteInterface = ({
	status,
	interfaceExit,
	cancelEvent,
	saveEvent,
	titleValue,
	textValue,
}) => (
	<>
		{status && (
			<InterfaceStyles>
				<section className='heading'>
					<LargerButtons event={interfaceExit} icon={<HiChevronLeft />} />
					<h5> Add a note </h5>
				</section>
				<TextArea titleChangeEvent={titleValue} textChangeEvent={textValue} />
				<section className='toolbar'>
					<div>
						<Button event={saveEvent} description='Save' icon={<HiSave />} />
						<Button event={cancelEvent} description='Discard' icon={<HiX />} />
					</div>
				</section>
			</InterfaceStyles>
		)}
	</>
);

export default AddNoteInterface;
