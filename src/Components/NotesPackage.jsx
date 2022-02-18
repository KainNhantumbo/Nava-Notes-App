import React from 'react';
import Note from './Note';

const NotesPackage = () => {

    const notesData = [
        {
            id: 0,
            content: 'Fazer a barba',
            completed: false
        },
        {
            id: 1,
            content: 'Lavar a roupa',
            completed: false
        },
        {
            id: 2,
            content: 'Ir ao Churrasco com a familia',
            completed: true
        },{
            id: 2,
            content: 'Ir ao Churrasco com a familia',
            completed: true
        },{
            id: 2,
            content: 'Ir ao Churrasco com a familia',
            completed: true
        },{
            id: 2,
            content: 'Ir ao Churrasco com a familia',
            completed: true
        },
        {
            id: 3,
            content: 'Alimentar Coelhos',
            completed: false
        }
    ];
    

    function alertar () {
        return alert('Informacao')
    }

    return (
        <section className="mainContainer"> 
            {
                notesData.map((value, index) => {
                    return <Note key={index} note={value.content} />
                })
            } 
        </section>
    )
}
export default NotesPackage;