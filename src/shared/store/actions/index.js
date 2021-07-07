import { SIGN_IN, INCREMENT, DECREMENT } from "../constants/action-types";

export const loggedIn = () => {
  return {
    type: SIGN_IN,
  };
};

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
