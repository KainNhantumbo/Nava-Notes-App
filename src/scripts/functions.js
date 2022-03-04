import { useState } from "react";

//controla o comportamento do modal de confirmacao
export function ShowModal () {
    const [visible, setVisible] = useState(false)

    const renderConfirmModal = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setVisible(true)
    }
    const removeModal = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setVisible(false)
    }

    return {
        renderConfirmModal,
        removeModal,
        visible
    }
}

export const retrieveNotes = () => {
    const notesData = [
        {
            title: 'Fazer a barba',
            content: ''
        },{
            title: 'Lavar a roupa',
            content: ''
        },{
            title: 'Ir ao Churrasco com a familia',
            content: ''
        },{
            title: 'Ir ao Churrasco com a familia',
            content: ''
        },{
            title: 'Ir ao Churrasco com a familiga',
            content: ''
        },{
            title: 'Ir ao Churrasco com a familia',
            content: ''
        },{
            title: 'Alimentar Coelhos',
            content: ''
        }
    ];

    // sorteia os elementos pelo titulo
    return (
        notesData.sort((a, b) => {
          if (a.title > b.title ) return true;
          if (a.title < b.title) return -1;
        })
    );
}