import { createContext } from "react";

const AppContext = createContext();

const initialState = {
  name: "atul",
  postTweetSuccessCount: 0,
  userTimeline: [],
  homeTimeLine: [],
};

function ourReducer(state, action) {
  switch (action.type) {
    case "POST_TWEET":
      return {
        ...state,
        postTweetSuccessCount: state.postTweetSuccessCount + 1,
      };
    case "LOGIN":
      return state;
    default:
      return state;
  }
}

export { initialState, ourReducer };

export default AppContext;
