import React from 'react';
import './Button.css';

function Button({content, value}) {

  return (
    <button className='button' onClick={console.log(value)}>{content}</button>
  );
}

export default Button;