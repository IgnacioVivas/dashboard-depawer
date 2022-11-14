import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../redux/actions';
import UsersList from './usersList/UsersList';

function UsersListContainer() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state);

  const getUsers = () => {
    dispatch(getAllUsers());
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <UsersList users={users} updateInfo={getUsers} />
    </>
  );
}

export default UsersListContainer;
