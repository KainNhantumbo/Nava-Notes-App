import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FooterStyles as Container } from '../styles/footer';
import { FaCogs, FaTrashAlt, HiCollection } from 'react-icons/all';

const footerButtons = () =>
  [
    {
      icon: <FaCogs />,
      description: 'Settings',
      path: '/pages/Settings',
    },
    {
      icon: <HiCollection />,
      description: 'Home',
      path: '/',
    },
    {
      icon: <FaTrashAlt />,
      description: 'Trash',
      path: '/pages/Trash',
    },
  ].sort((a, b) => {
    if (a.description > b.description) return true;
    return -1;
  });

const Footer = () => {
  const data = footerButtons();
  return (
    <Container>
      <section>
        {data.map(({ icon, description, path }, index) => (
          <Link key={index} to={path}>
            <div>
              <motion.button
                whileHover={{ scale: 1.18 }}
                whileTap={{ scale: 0.9 }}>
                {icon}
              </motion.button>
              <span>{description}</span>
            </div>
          </Link>
        ))}
      </section>
    </Container>
  );
};

export default Footer;
