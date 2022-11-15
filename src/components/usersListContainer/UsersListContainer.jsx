import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../redux/actions';
import Loader from '../loader/Loader';
import UsersList from './usersList/UsersList';

function UsersListContainer() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const getUsers = () => {
    dispatch(getAllUsers());
  };
  useEffect(() => {
    getUsers();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {loading && <Loader />}
      {/* <Loader /> */}
      <UsersList
        users={users}
        currentUsers={currentUsers}
        updateInfo={getUsers}
        postsPerPage={postsPerPage}
        paginate={paginate}
        loading={loading}
        setLoading={setLoading}
      />
    </>
  );
}

export default UsersListContainer;
