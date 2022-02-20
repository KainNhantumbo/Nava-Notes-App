import React from "react";
import LargerButtons from "./LargerButtons";
import { HiArchive, HiPencilAlt, HiCog  } from 'react-icons/hi';

const footerButtons = () => {
    const cogIcon = <HiCog />;
    const archiveIcon = <HiArchive />
    const pencilIcon = <HiPencilAlt />

    const data = [
        {
            icon: cogIcon,
            description: 'Settings'
        },
        {
            icon: archiveIcon,
            description: 'Archive'
        },
        {
            icon: pencilIcon,
            description: 'Add Note'
        }
    ];
    return data;
}

const Footer = ({ event }) => {
    const data = footerButtons();
    
    return (
        <footer>
            {
                data.map(({ icon, description }, index) => {
                    return (
                        <div onClick={event} key={index} data-index={index}>
                        <LargerButtons icon={icon}/>
                            <span>
                                {description}
                            </span>
                        </div>
                    );
                })
            }
        </footer>
    );
}

export default Footer;