import React from 'react';
import Button from '../../components/Button/Button';
import './Buttons.css';

function Buttons() {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '00'];
  const optionalBtns = ['AC', '+/-', '%'];
  const keys = [];

  return (
    <div className='buttons'>
      <div className='main-buttons'>
        <div className='optional-buttons'>
          {optionalBtns.map(val => {
            keys.push(keys.length);
            return <Button content={val} key={keys[keys.length - 1]} />
          })}
        </div>
        <div className="numbers">
          {numbers.map(val => {
            keys.push(keys.length);
            return <Button content={val} value={val} key={keys[keys.length - 1]} />
          })}
        </div>
      </div>
      <div className='operators'>
        <Button content='&divide;' value={'/'} key={'/'}/>
        <Button content='&times;' value={'*'} key={'*'}/>
        <Button content='&minus;' value={'-'} key={'-'}/>
        <Button content='&#xff0b;' value={'+'} key={'+'}/>
        <Button content='&#xff1d;' value={'='} key={'='}/>
      </div>
      <div className='break'></div>
      <div className='rectangle'></div>
    </div>
  );
}

export default Buttons;