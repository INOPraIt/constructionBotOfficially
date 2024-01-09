import React from 'react';
import '../style/Components/Navbar.scss';
import { Link } from 'react-router-dom';
import house from '../img/icon/house.png';
import info from '../img/icon/info.png';
import notif from '../img/icon/notification.png';
import message from '../img/icon/message.png';
import plus from '../img/icon/plusOne.png';

export default () => {
  return (
    <div className='navContainer'>
      <div className='navItemOne'>
        <Link to={'/login'} className='link'>
          <img
            className='linkImg'
            src={house}
          />
        </Link>
        <Link to={'/login'} className='link'>
          <img
            className='linkImg'
            src={info}
          />
        </Link>
      </div>
      <div className='navItemCenter'>
        <button className='classNavItemCenter'>
          <img
            className='linkImg'
            src={plus}
          />
        </button>
      </div>
      <div className='navItemTwo'>
        <Link to={'/login'} className='link'>
          <img
            className='linkImg'
            src={notif}
          />
        </Link>
        <Link to={'/login'} className='link'>
          <img
            className='linkImg'
            src={message}
          />
        </Link>
      </div>

    </div>
  )
}
