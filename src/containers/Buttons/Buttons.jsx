import React from 'react';
import Button from '../../components/Button/Button';
import './Buttons.css';

function Buttons({ changeCalc }) {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '00'];
  const optionalBtns = ['AC', '+/-', '%'];

  return (
    <div className='buttons'>
      <div className='main-buttons'>
        <div className='optional-buttons'>
          {optionalBtns.map(val =>
            <Button value={val} func={changeCalc} />
          )}
        </div>
        <div className="numbers">
          {numbers.map(val =>
            <Button value={val} func={changeCalc} />
          )}
        </div>
      </div>
      <div className='operators'>
        <Button value='&divide;' func={changeCalc} />
        <Button value='&times;' func={changeCalc} />
        <Button value='&minus;' func={changeCalc} />
        <Button value='&#xff0b;' func={changeCalc} />
        <Button value='&#xff1d;' func={changeCalc} />
      </div>
      <div className='break'></div>
      <div className='rectangle'></div>
    </div>
  );
}

export default Buttons;