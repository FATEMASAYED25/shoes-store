import axios from "axios";

const api = "https://backende-commerc.herokuapp.com/api";

export async function register(body) {
  try {
    const response = await axios.post(`${api}/register`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    localStorage.setItem("token", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function login(body) {
  try {
    const response = await axios.post(`${api}/users/login`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    localStorage.setItem("token", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

login({
  username: "user",
  password: "superuser",
});

export async function logout() {
  localStorage.removeItem("token");
}

export async function getCurrentUser() {
  return JSON.parse(localStorage.getItem("token"));
}
