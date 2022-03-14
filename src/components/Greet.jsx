const Greet = () => {
  const hours = `${new Date().getHours()}${new Date().getMinutes()}`;
  
  console.log(hours)

  const setGreetings = () => {
    let message = null;
    if (hours >= '0' && hours <= '1159') {
      message = 'Hello, good morning!';
    } else if (hours >= '120' && hours <= '1759'){
      message = 'Wellcome, good afternoon.';
    } else {
      message = 'Good evening, have a good sleep!'
    }
    return message;
  }

  return ( 
    <section>
      <span>
        { setGreetings() }
      </span>
    </section>
  );
}
 
export default Greet;