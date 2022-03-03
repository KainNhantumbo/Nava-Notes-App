import React from 'react';
import { InterfaceStyles } from '../styles/AddNotesInterfaceStyles';
import LargerButtons from './LargerButtons'
import TextArea from './TextArea';
import Button from './Button';
import { HiChevronLeft} from 'react-icons/hi';

const AddNoteInterface = () => {
  const xIcon = <HiChevronLeft />
  return (
    <InterfaceStyles>
      <section className='heading'>
        <LargerButtons icon={xIcon} />
        <h5> Add a note </h5>
      </section>
      <TextArea />
      <section className='toolbar'>
        <div>
          <Button description='Save' />
          <Button description='Cancel' />
        </div>
      </section>


    </InterfaceStyles>
  );
}

export default AddNoteInterface;