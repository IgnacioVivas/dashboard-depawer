import React from 'react';
import './adminMenu.scss';
import imgIcon from '../../image/logo-depawer.png';
import { Link } from 'react-router-dom';

function AdminMenu() {
  return (
    <div className='menu-container'>
      <div className='menu-wrapper'>
        <div className='icon-container'>
          <img src={imgIcon} alt='' />
        </div>
        <ul className='menu'>
          <Link to='aprobar-usuarios'>
            <li className='item item-select'>Aprobar usuario</li>
          </Link>
          <Link to='cargar-producto'>
            <li className='item'>Cargar producto</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default AdminMenu;
