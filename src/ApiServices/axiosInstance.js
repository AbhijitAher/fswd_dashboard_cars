import axios from "axios";

const instance = () => {
  const BASEURL = "http://localhost:8004/";

  const instance = axios.create({
    baseURL: BASEURL,
  });

  instance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error.response);
    }
  );
  return instance;
};

export default instance