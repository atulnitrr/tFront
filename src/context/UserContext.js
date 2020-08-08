import { createContext } from "react";

const UserContext = createContext();

const userInitialState = {
  first_name: localStorage.getItem("dw_first_name"),
  user_id: localStorage.getItem("dw_user_id"),
  isLoggedIn:
    localStorage.getItem("dw_first_name") !== null &&
    localStorage.getItem("dw_user_id") !== null,
};

const userStateReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      const { user_id, first_name } = action.payload;
      localStorage.setItem("dw_first_name", first_name);
      localStorage.setItem("dw_user_id", user_id);
      return { ...state, isLoggedIn: true };
    case "LOGOUT":
      console.log(state);
      localStorage.removeItem("dw_first_name");
      localStorage.removeItem("dw_user_id");
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export { userStateReducer, userInitialState };
export default UserContext;
