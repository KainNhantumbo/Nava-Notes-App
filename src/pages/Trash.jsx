import Header from '../components/Header';
import Button from '../components/Button';
import TrashNotesPackage from '../components/TrashNotesPackage';
import { HiFire } from 'react-icons/hi';
import { trashNotesPicker, setDataToStorage } from '../scripts/core-functions';

import React, { useState, useEffect } from 'react';


export default function Trash () {
  const fireIcon = <HiFire/>;

  const trashReseter = () => {
    var trash = [];
    setDataToStorage('trashData', trash);
  }

  const restoreNote = () => {
    
  }
  
  return (
    <>
      <Header title={'Trash'}
        child={<Button
          description='Permanently Delete All'
          icon={fireIcon}
          event={trashReseter}  
        />}
      />
      <TrashNotesPackage />
    </>
  );
}