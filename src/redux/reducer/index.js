import { ALL_PRODUCTS, ALL_USERS, SORT_DATA, SORT_PRODUCTS } from '../actions';

const initialState = { users: [], usersBackUp: [], products: [], productsBackUp: [] };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_USERS:
      return {
        ...state,
        users: action.payload,
        usersBackUp: action.payload,
      };
    case SORT_DATA:
      return { ...state, users: action.payload };
    case ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        productsBackUp: action.payload,
      };
    case SORT_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
