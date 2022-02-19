import react from "react";
import LargerButtons from "./LargerButtons";
import { HiCog } from 'react-icons/hi';

const Footer = () => {
    const cogIcon = <HiCog/>;
    return (
        <footer>
            <div>
                <LargerButtons icon={cogIcon}/>
                <span>
                    Settings
                </span>
            </div>
        </footer>
    );
}

export default Footer;