import React from 'react';
import AdminMenu from '../adminMenu/AdminMenu';
import Cargarproducto from '../cargarProducto/CargarProducto';
import DashboardSection from '../dashboardSection/DashboardSection';
import { Route, Routes } from 'react-router-dom';

import './adminPanel.scss';

function AdminPanel() {
  return (
    <div className='admin-panel-container'>
      <AdminMenu />
      <Routes>
        <Route path='/aprobar-usuarios' element={<DashboardSection />} />
        <Route path='/cargar-producto' element={<Cargarproducto />} />
      </Routes>
    </div>
  );
}

export default AdminPanel;
