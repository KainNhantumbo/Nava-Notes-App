import React from 'react';

const CheckBox = ({ event }) => {
  return (  
    <div>
      <input onChange={event} type="checkbox" />
    </div>
  );
}
 
export default CheckBox;