import React from 'react';
import { InterfaceStyles } from '../styles/AddNotesInterfaceStyles';
import LargerButtons from './LargerButtons'
import TextArea from './TextArea';
import Button from './Button';
import { HiChevronLeft } from 'react-icons/hi';

const AddNoteInterface = 
({ status, interfaceExit, cancelEvent, saveEvent, titleValue, textValue }) => {
  const xIcon = <HiChevronLeft />

  return (
    <>
      {
        status === true ? (
          <InterfaceStyles>
            <section className='heading'>
              <LargerButtons event={interfaceExit} icon={xIcon} />
              <h5> Add a note </h5>
            </section>
            <TextArea 
              titleChangeEvent={titleValue}
              textChangeEvent={textValue}
            />
            <section className='toolbar'>
              <div>
                <Button 
                  event={saveEvent} 
                  description='Save' 
                />
                <Button
                  event={cancelEvent}
                  description='Cancel'
                />
              </div>
            </section>
          </InterfaceStyles>
        ) : (
          null
        )
      }
    </>
  );
}

export default AddNoteInterface;