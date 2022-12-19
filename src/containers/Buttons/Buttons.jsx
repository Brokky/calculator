import React from 'react';
import Button from '../../components/Button/Button';
import './Buttons.css';

function Buttons() {

  return (
    <div className='buttons'>
      <div className='main-buttons'>
        <div className='optional-buttons'>
          <Button value={'AC'} />
          <Button value={'+/-'} />
          <Button value={'%'} />
        </div>
        <div className="numbers">
          <Button value={"1"} />
          <Button value={"2"} />
          <Button value={"3"} />
          <Button value={"4"} />
          <Button value={"5"} />
          <Button value={"6"} />
          <Button value={"7"} />
          <Button value={"8"} />
          <Button value={"9"} />
          <Button value={'.'} />
          <Button value={'0'} />
          <Button value={'00'} />
        </div>
      </div>
      <div className='operators'>
        <Button value='&divide;' />
        <Button value='&times;' />
        <Button value='&minus;' />
        <Button value='&#xff0b;' />
        <Button value='&#xff1d;' />
      </div>
      <div className='break'></div>
      <div className='rectangle'></div>
    </div>
  );
}

export default Buttons;