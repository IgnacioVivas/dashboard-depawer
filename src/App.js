import './App.css';
import 'remixicon/fonts/remixicon.css';
import AdminPanel from './components/adminPanel/AdminPanel';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login.jsx';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='dashboard/*' element={<AdminPanel />} />
      </Routes>
    </div>
  );
}

export default App;
