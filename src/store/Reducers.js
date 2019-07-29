import {
  SET_USER_DATA,
} from './Actions';


const initialState = {
  user: {},
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default appReducer;
