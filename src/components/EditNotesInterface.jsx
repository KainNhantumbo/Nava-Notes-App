import { InterfaceStyles } from '../styles/addNotesInterface';
import LargerButtons from './LargerButtons';
import TextArea from './TextArea';
import Button from './Button';
import { HiChevronLeft, HiSave, HiX } from 'react-icons/hi';

const EditNotesInterface = ({
	status,
	interfaceExit,
	exitEvent,
	updateEvent,
	titleValue,
	textValue,
	textAreaValue,
	inputValue,
}) => (
	<>
		{status && (
			<InterfaceStyles>
				<section className='heading'>
					<LargerButtons event={interfaceExit} icon={<HiChevronLeft />} />
					<h5> Edit And Preview </h5>
				</section>
				<TextArea
					titleChangeEvent={titleValue}
					textChangeEvent={textValue}
					textAreaValue={textAreaValue}
					inputValue={inputValue}
				/>
				<section className='toolbar'>
					<div>
						<Button
							event={updateEvent}
							description='Update'
							icon={<HiSave />}
						/>
						<Button event={exitEvent} description='Exit' icon={<HiX />} />
					</div>
				</section>
			</InterfaceStyles>
		)}
	</>
);

export default EditNotesInterface;
