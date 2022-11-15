import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortData } from '../../../redux/actions';
import Pagination from '../../pagination/Pagination';
import UserCard from './userCard/UserCard';
import './userList.scss';

function UsersList({
  users,
  updateInfo,
  postsPerPage,
  paginate,
  currentUsers,
  loading,
  setLoading,
}) {
  const dispatch = useDispatch();
  const { usersBackUp } = useSelector((state) => state);
  const [inputValue, setInputValue] = useState('');
  const [hideSearchIcon, setHideSearchIcon] = useState(false);

  const resetSearch = () => setInputValue('');

  const doSearch = () => {
    dispatch(
      sortData(
        usersBackUp.filter((item) => item?.name?.toLowerCase().includes(inputValue.toLowerCase()))
      )
    );
    setHideSearchIcon(true);
  };

  const clearSearch = () => {
    resetSearch();
    dispatch(sortData(usersBackUp));
    setHideSearchIcon(false);
  };

  const handleOnKeyDown = (e) => {
    if (e.keyCode === 13) doSearch();
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
    e.target.value === '' && clearSearch();
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
          {hideSearchIcon ? (
            <i className='ri-close-line' onClick={clearSearch}></i>
          ) : (
            <i className='ri-search-line' onClick={doSearch}></i>
          )}
        </div>
      </div>
      <div className='users-container'>
        <div className='celda-container'>
          <div className='celda'>
            <span className='title-celda'>usuarios</span>
          </div>
          <div className='celda'>
            <span className='title-celda'>Aprobar</span>
          </div>
        </div>
        {currentUsers?.map((user, index) => (
          <UserCard
            user={user}
            key={index}
            updateInfo={updateInfo}
            loading={loading}
            setLoading={setLoading}
          />
        ))}
        {currentUsers && currentUsers.length === 0 && (
          <p className='messageSearch'>no se encontraron usuarios</p>
        )}
      </div>
      <Pagination postsPerPage={postsPerPage} totalPosts={users.length} paginate={paginate} />
    </div>
  );
}

export default UsersList;
