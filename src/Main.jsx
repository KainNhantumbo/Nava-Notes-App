import React, { useState } from 'react';
import Header from './Components/Header';
import NotesPackage from './Components/NotesPackage';
import Footer from './Components/Footer';
import ConfirmModal from './Components/ConfirmModal';
import { retrieveNotes } from './scripts/functions';

const Main = () => {
    const notesData = retrieveNotes()
    const [visible, setVisible] = useState(false)
    const renderConfirmModal = () => {
        
    }
    const removeModal = () => {

    }
    const handleClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }
    const openRoute = (e) => {
        console.log(e.target.dataset)
    }
    return (
        <>
            <Header title="Notes"/>
            <NotesPackage 
                eventRemoveBtn={handleClick} 
                notesData={notesData}
            />
            <ConfirmModal 
                removeModal={removeModal}
                status={renderConfirmModal}
            />
            <Footer event={openRoute} />
        </>
    );
}

export default Main;
