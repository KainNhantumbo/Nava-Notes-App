import React, { useState } from 'react';
import Header from './Components/Header';
import NotesPackage from './Components/NotesPackage';
import Footer from './Components/Footer';
import ConfirmModal from './Components/ConfirmModal';
import { retrieveNotes } from './scripts/functions';
import { ShowModal } from './scripts/functions';

const Main = () => {
    const { removeModal, renderConfirmModal, visible } = ShowModal();
    var notesData = retrieveNotes();
    notesData = [];
    
    console.log(notesData)
    // controla o modal de confirmacao ao deletar nota
    
    
    const openRoute = (e) => {
        console.log(e.target.dataset)
    }
    return (
        <>
            <Header title="Notes"/>
            <NotesPackage 
                eventRemoveBtn={renderConfirmModal} 
                notesData={notesData}
            />
            <ConfirmModal 
                removeModal={removeModal}
                status={visible}
            />
            <Footer event={openRoute} />
        </>
    );
}

export default Main;
