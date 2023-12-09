import React from 'react';
import '../../assets/style/HomeStyle.scss';
import search from '../../assets/img/icon/iconSearch.png';
import ButtonClassicJob from '../../components/ButtonProfile/ButtonClassicJob';

export default function Home() {
  let mapBtn = [
    {
      id: 1,
      title: 'Работа',
      img: search
    },
    {
      id: 2,
      title: 'Статус',
      img: search
    }
  ]

  return (
    <div className='containerHome'>
      <p className='balansText'>
        Баланс
      </p>
      <p className='balansRubl'>
        0,00 Р
      </p>
      <div className='btnClassDiv'>
        {mapBtn.map(k => 
          <ButtonClassicJob 
            title={k.title}
            img={k.img}
          />
        )}
        
      </div>  
    </div>
  )
};

