import { greetings } from '../scripts/core-date';
import { useState, useEffect } from 'react';
import { GreetContainer as Container } from '../styles/greet';

export default function Greet() {
	const [greeting, setGreeting] = useState('');
	useEffect(() => {
		setGreeting(() => greetings());
	}, []);
	return (
		<Container>
			<span>{greeting}</span>
		</Container>
	);
}
