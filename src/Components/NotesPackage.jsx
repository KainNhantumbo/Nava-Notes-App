import React from 'react';
import Note from './Note';

const NotesPackage = ({notesData, eventRemoveBtn, noteDetails}) => {
    return (
        <section className="mainContainer"> 
            {
                notesData.map((value, index) => {
                    return <Note 
                    key={index} 
                    note={value.title}
                    noteDetails={noteDetails}
                    eventRemoveBtn={eventRemoveBtn}
                    />
                })
            } 
        </section>
    )
}
export default NotesPackage;