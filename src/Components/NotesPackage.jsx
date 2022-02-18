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
        },
        {
            id: 3,
            content: 'Alimentar Coelhos',
            completed: false
        }
    ];
    const note = notesData.map(value => value.content);
    
    return (
        <section className="mainContainer">
            <Note note={note[0]} />
            <Note note={note[1]} />
            <Note note={note[2]} />
            <Note note={note[3]} />
        </section>
    )
}
export default NotesPackage;