import React from 'react';
import { motion } from 'framer-motion';

export default ({
  named,
  price,
  tag
}) => {
  return (
    <>
      <motion.div
        className='cardsContainer'
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <div className='cardApplication'>
          <div className='textsItemCard'>
            <div className='itemNamed'>
              <p className='namecArdApplication'>{named}</p>
            </div>
          </div>
          <div className='groupPriceAndActiv'>
            <div className='itemPrice'>
              <p className='namedTextPrice'>Примерная цена</p>
              <p className='namedMeaning'>{price}<span class="rub">Р</span></p>
            </div>
            <div className='itemPrice'>
              <p className='namedTextPriceT'>Тэг автора:</p>
              <p className='namedMeaningT'>{tag}</p>
            </div>
          </div>
          <img
            src='https://alpakospb.ru/wp-content/uploads/2022/09/painting-contractor-orlando-2.jpg'
            className='cardImg'
          />
        </div>
      </motion.div>
    </>
  )
}
