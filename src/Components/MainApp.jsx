import React from 'react';
import Buttons from './Buttons';
import SvgDelete from '../svgs/x-circle.svg';
import SvgInfo from '../svgs/information-circle.svg';

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
            <div>
                <span>{note[0]}</span>
                <span className="buttonsContainer">
                    <button><img src={SvgInfo} alt="moreIcon" /></button>
                    <button><img src={SvgDelete} alt="deleteIcon" /></button>
                </span>
            </div>
            <div>
                <span>{note[1]}</span>
            </div>
            <div>
                <span>{note[2]}</span>
            </div>
            <div>
                <span>{note[3]}</span>
            </div>
        </section>
    )
}
export default MainApp;