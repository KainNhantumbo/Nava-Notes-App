import React from 'react';
import Header from './Components/Header';
import NotesPackage from './Components/NotesPackage';
import Footer from './Components/Footer';
import ConfirmModal from './Components/ConfirmModal';

const Main = () => {

    const notesData = [
        {
            title: 'Fazer a barba',
            content: '',
            completed: false
        },{
            title: 'Lavar a roupa',
            content: '',
            completed: false
        },{
            title: 'Ir ao Churrasco com a familia',
            content: '',
            completed: true
        },{
            title: 'Ir ao Churrasco com a familia',
            content: '',
            completed: true
        },{
            title: 'Ir ao Churrasco com a familia',
            content: '',
            completed: true
        },{
            title: 'Ir ao Churrasco com a familia',
            content: '',
            completed: true
        },{
            title: 'Alimentar Coelhos',
            content: '',
            completed: false
        }
    ];


    
    return (
        <>
            <Header title="Tiny Notes"/>
            <NotesPackage notesData={notesData}/>
            <ConfirmModal />
            <Footer />
        </>
    );
}

export default Main;
