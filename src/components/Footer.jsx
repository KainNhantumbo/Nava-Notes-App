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

  // retorna o objecto data ordenado por descricao
  return (
    data.sort((a, b) => {
      if (a.description > b.description )
      return true;
      if (a.description < b.description)
      return -1;
    })
  );
}

const Footer = () => {
  const data = footerButtons();
  console.log(data)
  return (
    <footer>
      {
        data.map(({ icon, description, path }, index) => {
          return (
            <Link key={index} to={path}>
              <div>
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