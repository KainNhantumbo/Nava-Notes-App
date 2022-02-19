import react from "react";
import LargerButtons from "./LargerButtons";
import { HiCog } from 'react-icons/hi';
import { HiArchive} from 'react-icons/hi';
import { HiPencilAlt} from 'react-icons/hi';

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

const Footer = () => {
    const data = footerButtons();
    
    return (
        <footer>
            {
                data.map(value => {
                    return (
                        <div>
                        <LargerButtons icon={value.icon}/>
                            <span>
                                {value.description}
                            </span>
                        </div>
                    );
                })
            }
        </footer>
    );
}

export default Footer;