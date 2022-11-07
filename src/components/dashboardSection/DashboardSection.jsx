import React from 'react';
import './dashboardSection.scss';

function DashboardSection() {
  return (
    <div className='dashboard-container'>
      <div className='search-container'>
        <h1>aprobar usuarios</h1>
        <div className='input-container'>
          <input type='text' placeholder='search user' />
          <i className='ri-search-line'></i>
        </div>
      </div>
      <div className='users-container'>
        <div className='celda-container'>
          <div className='celda'>
            <span className='title-celda'>usuarios</span>
          </div>
          <div className='celda'>
            <span className='title-celda'>Verificar</span>
          </div>
        </div>
        <div className='celda-container'>
          <div className='celda'>
            <span>Juan Carlos Alberto Rodriguez</span>
          </div>
          <div className='celda'>
            <span>true</span>
            <i className='ri-edit-2-line'></i>
          </div>
        </div>
        <div className='celda-container'>
          <div className='celda'>
            <span>Juan Carlos Alberto Rodriguez</span>
          </div>
          <div className='celda'>
            <span>true</span>
            <i className='ri-edit-2-line'></i>
          </div>
        </div>
        <div className='celda-container'>
          <div className='celda'>
            <span>Juan Carlos Alberto Rodriguez</span>
          </div>
          <div className='celda'>
            <span>true</span>
            <i className='ri-edit-2-line'></i>
          </div>
        </div>
        <div className='celda-container'>
          <div className='celda'>
            <span>Juan Carlos Alberto Rodriguez</span>
          </div>
          <div className='celda'>
            <span>true</span>
            <i className='ri-edit-2-line'></i>
          </div>
        </div>
        <div className='celda-container'>
          <div className='celda'>
            <span>Juan Carlos Alberto Rodriguez</span>
          </div>
          <div className='celda'>
            <span>true</span>
            <i className='ri-edit-2-line'></i>
          </div>
        </div>
        <div className='celda-container'>
          <div className='celda'>
            <span>Juan Carlos Alberto Rodriguez</span>
          </div>
          <div className='celda'>
            <span>true</span>
            <i className='ri-edit-2-line'></i>
          </div>
        </div>
        <div className='celda-container'>
          <div className='celda'>
            <span>Juan Carlos Alberto Rodriguez</span>
          </div>
          <div className='celda'>
            <span>true</span>
            <i className='ri-edit-2-line'></i>
          </div>
        </div>
        <div className='celda-container'>
          <div className='celda'>
            <span>Juan Carlos Alberto Rodriguez</span>
          </div>
          <div className='celda'>
            <span>true</span>
            <i className='ri-edit-2-line'></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardSection;
