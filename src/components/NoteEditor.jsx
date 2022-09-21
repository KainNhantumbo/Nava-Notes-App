import TextArea from './TextArea';
import { InterfaceStyles as Container } from '../styles/addNotesInterface';
import { HiChevronLeft, HiSave, HiX } from 'react-icons/hi';

export default function NoteEditor(props) {
	return (
		<>
			{props.status && (
				<Container>
					<section className='heading'>
						<button onClick={props.close}>
							<HiChevronLeft />
						</button>
						<h5>{props.update ? 'Edit and Preview' : 'Add a note'}</h5>
					</section>
					<TextArea
						titleChangeEvent={props.titleValue}
						textChangeEvent={props.textValue}
						textAreaValue={props.textAreaValue}
						inputValue={props.inputValue}
					/>
					<section className='toolbar'>
						<div>
							<button onClick={props.save}>
								<HiSave />
								<span>{props.update ? 'Update' : 'Save'}</span>
							</button>
							<button onClick={props.close}>
								<HiX />
								<span>{props.update ? 'Close' : 'Discard'}</span>
							</button>
						</div>
					</section>
				</Container>
			)}
		</>
	);
}
