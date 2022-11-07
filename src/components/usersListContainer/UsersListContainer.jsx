import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../redux/actions';
import UsersList from './usersList/UsersList';

function UsersListContainer() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <>
      <UsersList users={users} />
    </>
  );
}

export default UsersListContainer;
