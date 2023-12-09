import axios from "axios";

const api = axios.create({
  baseURL: "https://poop-tracker-server.onrender.com",
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
