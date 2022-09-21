import { Message as Container } from '../styles/styles';

const EmptyNotesMessage = ({ message, label, icon }) => (
	<Container>
		{icon}
		<span>
			{label} <br />
			{message}
		</span>
	</Container>
);

export default EmptyNotesMessage;
