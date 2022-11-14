import axios from 'axios';

export const ALL_USERS = 'ALL_USERS';
export const SORT_DATA = 'SORT_DATA';
export const ALL_PRODUCTS = 'ALL_PRODUCTS';
export const SORT_PRODUCTS = 'SORT_PRODUCTS';

const postProducts = (values) => {
  return async function () {
    const create = axios.post(`https://dpower-production.up.railway.app/products`, values);
    return create;
  };
};

const editProduct = (values, id) => {
  return async function () {
    const edit = axios.put(`https://dpower-production.up.railway.app/products/${id}`, values);
    return edit;
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

const getAllProducts = () => {
  return async (dispatch) => {
    try {
      const resp = await axios.get('https://dpower-production.up.railway.app/products');
      dispatch({ type: ALL_PRODUCTS, payload: resp.data });
    } catch (error) {}
  };
};

const sortProducts = (products) => {
  return { type: SORT_PRODUCTS, payload: products };
};

export { postProducts, getAllUsers, sortData, sortProducts, getAllProducts, editProduct };
