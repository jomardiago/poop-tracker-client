import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const getRequestHeader = () => {
  let accessToken = "";

  if (localStorage.getItem("sessionStore")) {
    const sessionStore = JSON.parse(localStorage.getItem("sessionStore")!);
    accessToken = sessionStore.state.session.accessToken;
  }

  return {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
};

export default api;
