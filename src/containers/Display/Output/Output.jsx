import React from 'react';
import './Output.css';

function Output({ displayedNumber, history }) {
  return (
    <div className='output'>
      <div className='history'>
        {history || 0}
      </div>
      <div className='result'>
        <span>=</span>
        <span>{displayedNumber || 0}</span>
      </div>
    </div>
  )
}

export default Output;