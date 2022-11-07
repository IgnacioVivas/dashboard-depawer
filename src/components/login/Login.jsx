import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import iconDepawer from '../../image/logo-depawer.png';
import './login.scss';
import swal from 'sweetalert';

function Login() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    username: '',
    password: '',
  });
  const handleChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };
  const goToDashboard = () => {
    return navigate('/dashboard/aprobar-usuarios');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      inputValue.username.toLowerCase() === 'depawer' &&
      inputValue.password.toLocaleLowerCase() === 'depawer'
    ) {
      goToDashboard();
    } else {
      // swal({
      //   title: 'Good job!',
      //   text: 'You clicked the button!',
      //   icon: 'warning',
      //   button: 'Aww yiss!',
      // });
    }
  };
  return (
    <div className='login-container'>
      <div className='login-wrapper'>
        <img src={iconDepawer} alt='' />
        <form action='' className='login-form' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='username'
            name='username'
            value={inputValue.username}
            onChange={handleChange}
          />
          <input
            type='password'
            placeholder='password'
            name='password'
            value={inputValue.password}
            onChange={handleChange}
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
