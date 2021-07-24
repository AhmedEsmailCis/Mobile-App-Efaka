import Axios from "axios";

const RegisterUrl = "http://www.ozooma.net/en/api/registerUser";

export const registerUser =
  ({ name, email, password, mobile }) =>
  (dispatch) => {
    dispatch({ type: "updateLoader", loading: true });
    dispatch({ type: "updateStatus", status: false });
    Axios.post(RegisterUrl, {
      name,
      email,
      password,
      mobile,
    })
      .then((resp) => handleRegistration(dispatch, resp))
      .catch((error) => handleError(dispatch, error));
  };
const handleRegistration = (dispatch, resp) => {
  // dispatch({type: 'updateStatus', status: true});
  dispatch({ type: "updateLoader", loading: false });
  dispatch({ type: "updateStatus", status: true });
};
const handleError = (dispatch, error) => {
  dispatch({ type: "updateStatus", status: false });
  dispatch({ type: "updateLoader", loading: false });
};
