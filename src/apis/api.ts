import axios from "axios";

console.log(process.env.NODE_ENV);

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : "https://poop-tracker-server.onrender.com",
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
