import React from 'react';
import '../../assets/style/Pages/Home.scss';
import { motion } from 'framer-motion';
import CardApplication from '../../assets/components/CardApplication';

export default () => {
  let arrayCardApplication = [
    { id: 1, named: "Покраска", price: 40000, tag: '@fronter' },
    { id: 2, named: "Оклейка", price: 40000, tag: '@fronter' },
    { id: 3, named: "Штукатурка", price: 40000, tag: '@fronter' },
    { id: 4, named: "Постройка", price: 40000, tag: '@fronter' },
  ]

  return (
    <div className='containerHome'>
      <div className='homeOneInput'>
        <motion.p
          className='welcomeText'
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Добро пожаловать
        </motion.p>
        <motion.p
          className='welcomeText'
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          в систему
        </motion.p>
      </div>
      <div className='cardContainerTwoOverflow'>
        {arrayCardApplication.map(k =>
          <CardApplication
            key={k.id}
            named={k.named}
            price={k.price}
            tag={k.tag}
          />
        )}
      </div>
    </div>
  )
}
