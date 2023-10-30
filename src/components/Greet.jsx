import { greetings } from '../scripts/core-date';
import { useState, useEffect } from 'react';
import { GreetContainer as Container } from '../styles/greet';

export default function Greet() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setGreeting(() => greetings());
    }, 1000);
    return () => clearTimeout(debounceTimer);
  }, [greeting]);

  return (
    <>
      {greeting ? (
        <Container>
          <span>{greeting}</span>
        </Container>
      ) : (
        <Container>
          <span>Hello!</span>
        </Container>
      )}
    </>
  );
}
