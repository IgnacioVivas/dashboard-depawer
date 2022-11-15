import axios from 'axios';
import React from 'react';
import ToggleSwitch from '../../../toggleSwitch/ToggleSwitch';

function UserCard({ user, updateInfo, getUsers, key, loading, setLoading }) {
  const validateUser = async () => {
    try {
      const { data } = await axios.put(
        `https://dpower-production.up.railway.app/users/${user.id}`,
        {
          ...user,
          validated: !user.validated,
        }
      );
      updateInfo();
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className='celda-container'>
        <div className='celda'>
          <span>{user?.name}</span>
        </div>
        <div className='celda'>
          {/* <span>{user?.validated ? 'Aprobado' : 'Rechazado'}</span> */}
          {/* <i className='ri-edit-2-line' onClick={validateUser}></i> */}
          <ToggleSwitch validateUser={validateUser} user={user} getUsers={getUsers} key={key} />
        </div>
      </div>
    </>
  );
}

export default UserCard;
