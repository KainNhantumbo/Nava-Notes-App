import React from "react";
import LargerButtons from "./LargerButtons";
import { Link } from 'react-router-dom';
import { HiArchive, HiPencilAlt, HiCog, HiHome } from 'react-icons/hi';

const footerButtons = () => {
    const cogIcon = <HiCog />;
    const archiveIcon = <HiArchive />
    const pencilIcon = <HiPencilAlt />
    const homeIcon = <HiHome />

    // dados e detalhes de cada botao no footer
    const data = [
        {
            icon: cogIcon,
            description: 'Settings',
            path: '/pages/Settings'
        }, {
            icon: homeIcon,
            description: 'Home',
            path: '/pages/Home'
        },
        {
            icon: archiveIcon,
            description: 'Archive',
            path: '/pages/Archive'
        },
        {
            icon: pencilIcon,
            description: 'Add Note',
            path: '/pages/AddNote'
        }
    ];

    // retorna a ordenacao por descricao
    data.sort((a, b) => a.description > b.description);

    return data;
}

const Footer = () => {
    const data = footerButtons();

    return (
        <footer>
            {
                data.map(({ icon, description, path }, index) => {
                    return (
                        <Link to={path}>
                            <div key={index} data-index={index}>
                                <LargerButtons icon={icon} />
                                <span>
                                    {description}
                                </span>
                            </div>
                        </Link>
                    );
                })
            }
        </footer>
    );
}

export default Footer;