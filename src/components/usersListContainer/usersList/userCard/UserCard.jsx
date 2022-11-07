import React from 'react';

function UserCard({ user }) {
  return (
    <>
      <div className='celda-container'>
        <div className='celda'>
          <span>{user?.name}</span>
        </div>
        <div className='celda'>
          <span>{user?.validated}</span>
          <i className='ri-edit-2-line'></i>
        </div>
      </div>
    </>
  );
}

export default UserCard;
