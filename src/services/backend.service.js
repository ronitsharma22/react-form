import axios from "axios";

export const backendServices = {
  get,
  post,
};

async function post(url, params) {
  const header = {
    "content-type": "application/json",
  };
  // console.log("this", header);
  try {
    const response = await axios.post(url, params, { headers: header });
    return response;
  } catch (error) {
    // console.log("new", error.response);
    return error;
  }
}

async function get(url, isAuthenticated) {
  const header = {
    "content-type": "application/json",
  };
  try {
    const response = await axios.get(url, { headers: header });
    return response;
  } catch (error) {
    return error;
  }
}
