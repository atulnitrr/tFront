import { createContext } from "react";

const UserContext = createContext();

const userInitialState = {
  first_name: localStorage.getItem("dw_first_name"),
  isLoggedIn: localStorage.getItem("dw_first_name") !== null ? true : false,
  user_id: localStorage.getItem("dw_user_id"),
};

const userStateReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      const { user_id, first_name } = action.payload;
      localStorage.setItem("dw_first_name", first_name);
      localStorage.setItem("dw_user_id", user_id);
      return state;
    case "LOGOUT":
      console.log("LOGUT called");
      localStorage.removeItem("dw_first_name");
      localStorage.removeItem("dw_user_id");
      return state;
    default:
      return state;
  }
};

export { userStateReducer, userInitialState };
export default UserContext;
