import axios from 'axios';
import React from 'react';

function UserCard({ user }) {
  const validateUser = async (id, userId, title, body) => {
    try {
      const { data } = await axios.put(
        `https://dpower-production.up.railway.app/users/${user.id}`,
        {
          validated: user.validated,
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  validateUser({ validated: !user.validated });
  return (
    <>
      <div className='celda-container'>
        <div className='celda'>
          <span>{user?.name}</span>
        </div>
        <div className='celda'>
          <span>{user?.validated ? 'true' : 'false'}</span>
          <i className='ri-edit-2-line' onClick={validateUser}></i>
        </div>
      </div>
    </>
  );
}

export default UserCard;
