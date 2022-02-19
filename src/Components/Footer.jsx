import react from "react";
import LargerButtons from "./LargerButtons";
import { HiCog } from 'react-icons/hi';

const footerButtons = () => {
    const cogIcon = <HiCog/>;

    const data = [
        {
            icon: cogIcon,
            description: 'Settings'
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