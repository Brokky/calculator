import React from 'react';
import './Button.css';

function Button({value}) {

  return (
    <button className='button'>{value}</button>
  );
}

export default Button;