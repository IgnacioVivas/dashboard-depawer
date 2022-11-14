import React, { useEffect, useState } from 'react';
import './toggleSwitch.scss';

function ToggleSwitch({ validateUser, user }) {
  const [checked, setChecked] = useState(null);
  useEffect(() => {
    setChecked(user.validated);
  }, [user.validated]);

  return (
    <>
      <label className='switch' id='labeel'>
        <input type='checkbox' onClick={validateUser} defaultChecked={checked} />
        <span className='slider'></span>
      </label>
    </>
  );
}

export default ToggleSwitch;
