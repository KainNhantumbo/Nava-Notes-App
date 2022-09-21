import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FooterStyles as Container } from '../styles/footer';
import { FaCogs, FaTrashAlt, HiCollection } from 'react-icons/all';

const footerButtons = () => {
	// dados e detalhes de cada botao no footer
	const data = [
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
	];

	// retorna o objecto data ordenado por descricao
	return data.sort((a, b) => {
		if (a.description > b.description) return true;
		return -1;
	});
};

const Footer = () => {
	const data = footerButtons();

	const renderFooter = () =>
		data.map(({ icon, description, path }, index) => (
			<Link key={index} to={path}>
				<div>
					<motion.button whileHover={{ scale: 1.18 }} whileTap={{ scale: 0.9 }}>
						{icon}
					</motion.button>
					<span>{description}</span>
				</div>
			</Link>
		));

	return (
		<Container>
			<section>{renderFooter()}</section>
		</Container>
	);
};

export default Footer;
