import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortData } from '../../../redux/actions';
import UserCard from './userCard/UserCard';
import './userList.scss';

function UsersList({ users }) {
  const dispatch = useDispatch();
  const { usersBackUp } = useSelector((state) => state);
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => setInputValue(e.target.value);
  const resetSearch = () => setInputValue('');
  const handleOnKeyDown = (e) => {
    if (e.keyCode === 13) doSearch();
  };
  const doSearch = () => {
    dispatch(
      sortData(
        usersBackUp.filter((item) => item?.name?.toLowerCase().includes(inputValue.toLowerCase()))
      )
    );
    resetSearch();
  };
  return (
    <div className='dashboard-container'>
      <div className='search-container'>
        <h1>aprobar usuarios</h1>
        <div className='input-container'>
          <input
            type='text'
            placeholder='search user'
            name='searchValue'
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleOnKeyDown}
          />
          <i className='ri-search-line' onClick={doSearch}></i>
        </div>
      </div>
      <div className='users-container'>
        <div className='celda-container'>
          <div className='celda'>
            <span className='title-celda'>usuarios</span>
          </div>
          <div className='celda'>
            <span className='title-celda'>Verificar</span>
          </div>
        </div>
        {users?.map((user, index) => (
          <UserCard user={user} key={index} />
        ))}
      </div>
    </div>
  );
}

export default UsersList;
