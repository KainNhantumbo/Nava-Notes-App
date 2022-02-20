import React from 'react';
import Note from './Note';

const NotesPackage = ({notesData, deleteNote, showNote}) => {
    return (
        <section className="mainContainer"> 
            {
                notesData.map((value, index) => {
                    return <Note 
                    key={index} 
                    note={value.title}
                    showNote={showNote}
                    deleteNote={deleteNote}
                    />
                })
            } 
        </section>
    )
}
export default NotesPackage;