import React from 'react';
import './Output.css';

function Output({ calc }) {
  return (
    <div className='output'>
      <div className='history'>
        1000
      </div>
      <div className='result'>
        <span>=</span>
        <span>{calc || 0}</span>
      </div>
    </div>
  )
}

export default Output;