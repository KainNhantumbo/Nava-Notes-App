import React from "react";
import LargerButtons from "./LargerButtons";
import { Link } from 'react-router-dom';
import { HiArchive, HiPencilAlt, HiCog, HiHome } from 'react-icons/hi';
import { FooterStyles } from "../styles/footerStyles";

const footerButtons = () => {
  const cogIcon = <HiCog />;
  const archiveIcon = <HiArchive />
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
      path: '/'
    },
    {
      icon: archiveIcon,
      description: 'Archive',
      path: '/pages/Archive'
    }
  ];

  // retorna o objecto data ordenado por descricao
  return (
    data.sort((a, b) => {
      if (a.description > b.description) return true;
      if (a.description < b.description) return -1;
    })
  );
}

const Footer = () => {
  const data = footerButtons();

  const renderFooter = () => {
    return (
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
    )
  }

  return (
    <FooterStyles>
      <section>
        {
          renderFooter()
        }
      </section>
    </FooterStyles>
  );
}

export default Footer;