import React from "react";
import LargerButtons from "./LargerButtons";
import { Link } from 'react-router-dom';
import { HiArchive, HiPencilAlt, HiCog  } from 'react-icons/hi';

const footerButtons = () => {
    const cogIcon = <HiCog />;
    const archiveIcon = <HiArchive />
    const pencilIcon = <HiPencilAlt />

    const data = [
        {
            icon: cogIcon,
            description: 'Settings',
            path: '/pages/Settings'
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
    return data;
}

const Footer = ({ event }) => {
    const data = footerButtons();
  
    return (
        <footer>
            {
                data.map(({ icon, description, path}, index) => {
                    return (
                        <Link to={path}>
                            <div onClick={event} key={index} data-index={index}>
                            <LargerButtons icon={icon}/>
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