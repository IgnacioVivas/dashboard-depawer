import React, { useEffect, useState } from 'react';
import './toggleSwitch.scss';

function ToggleSwitch({ validateUser, user, getUsers }) {
  const [checked, setChecked] = useState(user.validated);
  useEffect(() => {
    // getUsers();
    setChecked(user.validated);
  }, [user.validated]);
  const handleChange = () => {
    validateUser();
  };
  return (
    <>
      <label className='switch'>
        <input type='checkbox' onChange={handleChange} defaultChecked={checked} />
        <span className='slider'></span>
      </label>
    </>
  );
}

export default ToggleSwitch;
