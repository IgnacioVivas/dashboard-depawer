import axios from 'axios';
import React from 'react';

function UserCard({ user, updateInfo }) {
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
          <span>{user?.validated ? 'Aprobado' : 'Rechazado'}</span>
          <i className='ri-edit-2-line' onClick={validateUser}></i>
        </div>
      </div>
    </>
  );
}

export default UserCard;
