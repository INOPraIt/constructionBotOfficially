import React from 'react';
import search from '../../assets/img/icon/iconSearch.png';

export default function ButtonClassicJob({
  title,
  img
}) {
  return (
    <>
      <button className='jobBtn'>
        <div className='buttonDiv'>
          <div className='btnElipsOne'>
            <img
              className='imgButtonStyle'
              src={img}
            />
          </div>
          <p className='buttonText'>
            {title}
          </p>
        </div>
      </button>
    </>
  )
}
