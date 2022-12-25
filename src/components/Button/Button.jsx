import React from 'react';
import './Button.css';

function Button({content, value, func}) {
  
  return (
    <button className='button' onClick={() => func(value)}>{content}</button>
  );
}

export default Button;