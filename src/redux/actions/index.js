import axios from 'axios';

export const ALL_USERS = 'ALL_USERS';
export const SORT_DATA = 'SORT_DATA';

const postProducts = (values) => {
  return async function () {
    const create = axios.post(`https://dpower-production.up.railway.app/products`, values);
    return create;
  };
};

const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const resp = await axios.get('https://dpower-production.up.railway.app/users');
      dispatch({ type: ALL_USERS, payload: resp.data });
    } catch (error) {}
  };
};

const sortData = (users) => {
  return { type: SORT_DATA, payload: users };
};

export { postProducts, getAllUsers, sortData };
