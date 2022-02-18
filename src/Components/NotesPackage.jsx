import React from 'react';
import Note from './Note';

const NotesPackage = ({notesData}) => {
    return (
        <section className="mainContainer"> 
            {
                notesData.map((value, index) => {
                    return <Note key={index} note={value.title} />
                })
            } 
        </section>
    )
}
export default NotesPackage;