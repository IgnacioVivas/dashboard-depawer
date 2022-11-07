import { ALL_USERS, SORT_DATA } from '../actions';

const initialState = { users: [], usersBackUp: [] };

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
    default:
      return state;
  }
};

export default rootReducer;
