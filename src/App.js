import './App.css';
import 'remixicon/fonts/remixicon.css';
import AdminPanel from './components/adminPanel/AdminPanel';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Login from './components/login/Login.jsx';
import { useEffect } from 'react';

function App() {
  const location = useLocation();
  useEffect(() => {
    const iconLogOut = document.getElementById('iconLogOut');
    if (location.pathname === '/login') {
      iconLogOut.style.display = 'none';
    } else {
      iconLogOut.style.display = 'block';
    }
  }, [location.pathname]);
  let hola = 'hola';
  return (
    <div className='App' style={{ position: 'relative' }}>
      <Link to={`/login`}>
        <i
          className='ri-logout-box-line'
          id='iconLogOut'
          style={{
            position: 'absolute',
            right: '30px',
            top: '30px',
            fontSize: '30px',
            color: '#c6d31b',
          }}
        ></i>
      </Link>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='dashboard/*' element={<AdminPanel />} />
      </Routes>
    </div>
  );
}

export default App;
