import React from 'react';
import '../assets/style/Inputs.scss';

export default function Inputs({
  placeholder,
  type
}) {
  return (
    <div>
      <input
        className='inputsQuestions'
        placeholder={placeholder}
        type={type}
        min="0"
        max="700000"
      />
    </div>
  )
}

