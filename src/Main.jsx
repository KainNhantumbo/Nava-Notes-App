import React, { useState } from 'react';
import Header from './Components/Header';
import NotesPackage from './Components/NotesPackage';
import Footer from './Components/Footer';
import ConfirmModal from './Components/ConfirmModal';
import { retrieveNotes } from './scripts/functions';

const Main = () => {
    const notesData = retrieveNotes()
    const [visible, setVisible] = useState(false)

    // controla o modal de confirmacao ao deletar nota
    const renderConfirmModal = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setVisible(true)
    }
    const removeModal = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setVisible(false)
    }
    
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
