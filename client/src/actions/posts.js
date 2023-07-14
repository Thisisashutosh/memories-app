import * as api from "../api";

//action creators
const getPosts = () => async (dispatch) => {
  const action = { type: "FETCH_ALL", payload: [] };

  dispatch(action);
};
