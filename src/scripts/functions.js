import { useState } from "react/cjs/react.production.min";

export default function ShowModal () {
    const [visible, setVisible] = useState(false)

    return {

    }
}

export const retrieveNotes = () => {
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
    return notesData
}