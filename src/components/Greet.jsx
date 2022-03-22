import { GreetContainer } from '../styles/greet';

const Greet = () => {
  const hours = new Date().getHours();

  const setGreetings = () => {
    let message = null;
    if (hours >= 0 && hours <= 12) {
      message = 'Hello, good morning!';
    } else if (hours >= 12 && hours <= 18){
      message = 'Wellcome, good afternoon.';
    } else if (hours >= 18 && hours <= 23){
      message = 'Good evening, have a good sleep!'
    }
    return message;
  }

  return ( 
    <GreetContainer>
      <span>
        { setGreetings() }
      </span>
    </GreetContainer>
  );
}
 
export default Greet;