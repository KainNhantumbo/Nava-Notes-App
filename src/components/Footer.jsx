import React from "react";
import LargerButtons from "./LargerButtons";
import { Link } from 'react-router-dom';
import { HiCollection, HiCog, HiTrash } from 'react-icons/hi';
import { FooterStyles } from "../styles/footer";

const footerButtons = () => {
  const cogIcon = <HiCog />;
  const trashIcon = <HiTrash />
  const homeIcon = <HiCollection />

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
      icon: trashIcon,
      description: 'Trash',
      path: '/pages/Trash'
    }
  ];

  // retorna o objecto data ordenado por descricao
  return (
    data.sort((a, b) => {
      if (a.description > b.description) return true;
      return -1;
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