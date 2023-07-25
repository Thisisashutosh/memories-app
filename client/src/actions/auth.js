import * as api from "../api";

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    // log in the user

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = () => async (dispatch) => {
    try {
    // sign up the user

    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
