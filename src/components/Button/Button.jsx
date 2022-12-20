import React from 'react';
import './Button.css';

function Button({value, func}) {


  return (
    <button className='button' onClick={() => func(value)}>{value}</button>
  );
}

export default Button;