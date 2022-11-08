import React from 'react';
import './adminMenu.scss';
import imgIcon from '../../image/logo-depawer.png';
import { Link, useLocation } from 'react-router-dom';

function AdminMenu() {
  let location = useLocation();
  const itemOne = document.getElementById('itemOne');
  const itemTwo = document.getElementById('itemTwo');

  switch (location.pathname) {
    case '/dashboard/cargar-producto':
      if (itemTwo !== null) {
        itemTwo.style.borderBottom = '2px solid #c6d31b';
        itemOne.style.borderBottom = 'none';
      }
      break;
    case '/dashboard/aprobar-usuarios':
      if (itemOne !== null) {
        itemOne.style.borderBottom = '2px solid #c6d31b';
        itemTwo.style.borderBottom = 'none';
      }
    default:
      break;
  }
  return (
    <div className='menu-container'>
      <div className='menu-wrapper'>
        <div className='icon-container'>
          <img src={imgIcon} alt='' />
        </div>
        <ul className='menu'>
          <Link to='aprobar-usuarios'>
            <li className='item item-select' id='itemOne'>
              Aprobar usuario
            </li>
          </Link>
          <Link to='cargar-producto'>
            <li className='item' id='itemTwo'>
              Cargar producto
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default AdminMenu;
