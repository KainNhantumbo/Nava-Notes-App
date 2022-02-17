import React from 'react';

const MainApp = () => {

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
            content: 'Ir ao Churrasco',
            completed: true
        },
        {
            id: 3,
            content: 'Alimentar Coelhos',
            completed: false
        }
    ];

    const note = notesData.map(value => value.content)

    return (
        <section className="mainContainer">
            <div>
                {note[0]}
            </div>
            <div>
                {note[1]}
            </div>
            <div>
                {note[2]}
            </div>
            <div>
                {note[3]}
            </div>
        </section>
    )
}
export default MainApp;