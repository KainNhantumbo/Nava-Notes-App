import TextArea from './TextArea';
import { HiChevronLeft, HiSave, HiX } from 'react-icons/hi';
import { InterfaceStyles as Container } from '../styles/addNotesInterface';

const NoteEditor = (props) => (
  <>
    {props.status && (
      <Container>
        <section className='heading'>
          <button onClick={props.close}>
            <HiChevronLeft />
          </button>
          <h5>{props.updateMode ? 'Edit and Preview' : 'Add a note'}</h5>
        </section>
        <TextArea
          titleChangeEvent={props.titleValue}
          textChangeEvent={props.textValue}
          textAreaValue={props.textAreaValue}
          inputValue={props.inputValue}
        />
        <section className='toolbar'>
          <div>
            <button
              onClick={() => {
                if (props.updateMode) return props.updateFn();
                return props.saveFn();
              }}>
              <HiSave />
              <span>{props.updateMode ? 'Update' : 'Save'}</span>
            </button>
            <button onClick={props.close}>
              <HiX />
              <span>{props.updateMode ? 'Close' : 'Discard'}</span>
            </button>
          </div>
        </section>
      </Container>
    )}
  </>
);

export default NoteEditor;
