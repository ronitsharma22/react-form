import { services } from "../services";

export const authActions = {
  saveFormData,
  getFormdata,
};

function fetchedData(type, data) {
  return {
    type: type,
    data: data,
  };
}
function saveFormData(params = {}) {
  return async (dispatch) => {
    const response = services.post(
      `https://react-form-f63f8-default-rtdb.firebaseio.com/formData.json`,
      params
    );
    // console.log("res", response);
    response.then((promise) => {
      if (promise.status === 200) {
        dispatch(fetchedData("SAVED_FORM_DATA", promise.data));
      } else {
        // console.log("error");
      }
    });
  };
}

function getFormdata() {
  return (dispatch) => {
    const response = services.get(
      `https://react-form-f63f8-default-rtdb.firebaseio.com/formData.json`
    );
    return response.then((promise) => {
      if (promise.data) {
        dispatch(fetchedData("FETCHED_FORM_DATA", Object.values(promise.data)));
      } else {
        // console.log('error in getBanners actions');
      }
    });
  };
}
