import { greetings } from '../scripts/core-date';
import { useState, useEffect } from 'react';
import { GreetContainer as Container } from '../styles/greet';

export default function Greet() {
  const [greeting, setGreeting] = useState('');
	
  useEffect(() => {
    const revalidateGreet = setTimeout(() => {
      setGreeting(() => greetings());
    }, 1000);
    return () => clearTimeout(revalidateGreet);
  }, [greeting]);
	
  return (
    <Container>
      <span>{greeting}</span>
    </Container>
  );
}
