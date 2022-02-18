import React from 'react';
import Header from './Components/Header';
import NotesPackage from './Components/NotesPackage';

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
        </>
    );
}

export default Main;
