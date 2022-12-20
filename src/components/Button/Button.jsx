import React from 'react';
import './Button.css';

function Button({content, func, value}) {

  return (
    <button className='button' onClick={() => func(value)}>{content}</button>
  );
}

export default Button;