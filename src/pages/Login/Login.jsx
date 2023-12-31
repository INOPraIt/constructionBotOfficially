import React from 'react';
import '../../assets/style/LoginStyle.scss';
import { motion } from "framer-motion";
import Inputs from '../../components/Inputs';

export default () => {

  let arrayInputs = [
    { id: 1, placeholder: 'ФИО', type: "text" },
    { id: 2, placeholder: 'Возраст', type: "number" },
    { id: 3, placeholder: 'Ожидаемая зп', type: "number" },
    { id: 4, placeholder: 'Сколько времени готовы уделять(ч в неделю)', type: "number" },
    { id: 5, placeholder: 'Ваше оброзование', type: "text" },
    { id: 6, placeholder: 'Есть ли практический опыт(лет)', type: "number" },
  ]

  return (
    <div className='loginContainer'>
      <div className='oneDivKub'>
        <p className='textWelcomeOne'>
          Добро пожаловать, <br />давайте познакомимся!
        </p>
        {arrayInputs.map(k =>
          <Inputs 
            key={k.id}
            placeholder={k.placeholder}
            type={k.type}
          />
        )}
        <button className='sendBtn'>
          Отправить
        </button>
      </div>

    </div>
  )
}

