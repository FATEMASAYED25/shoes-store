import axios from 'axios'

const api = "https://backende-commerc.herokuapp.com/api";

const admin_data = {
  "username": process.env.REACT_APP_USERNAME_ADMIN,
  "password": process.env.REACT_APP_PASSWORD_ADMIN
}

const user_data = {
  "username": process.env.REACT_APP_USERNAME_USER,
  "password": process.env.REACT_APP_PASSWORD_USER
}

export async function getToken(body) {
  try {
    const response = await axios.post(
      `${api}/users/login`,
      body,
      {headers: {
        'Content-Type': 'application/json'
      }}
    );
    return response.data
  } catch (error) {
    console.error(error);
  }
}

export async function allProducts() {
  let data = null;
  try {
    const res = await fetch(`${api}/products`);
    data = await res.json();
  } catch (err) {
    console.error(err);
  }
  return data;
}

export async function deleteProduct(id) {
  let data = null;
  try {
    const res = await fetch(`${api}/products/${id}`);
    data = await res.json();
  } catch (err) {
    console.error(err);
  }
  return data;
}

export async function allUsers(token) {
  try {
    getToken(token).then(data => {
      axios.get(
        `${api}/users/`,
        {headers: {
          'Accept': "application/json",
          'Authorization': `Bearer ${data.token}`,
        }}
      ).then(res => console.log(res.data))
    }) 
  } catch (error) {
    console.error(error);
  }
}

allUsers(admin_data)

export async function getUserById(token, id) {
  try {
    getToken(token).then(data => {
      axios.get(
        `${api}/users/${id}`,
        {headers: {
          'Accept': "application/json",
          'Authorization': `Bearer ${data.token}`,
        }}
      ).then(res => console.log(res.data))
    }) 
  } catch (error) {
    console.error(error);
  }
}

getUserById(user_data, 1)

export async function updateUserInfo(token, body) {
  try {
    getToken(token).then(data => {
      axios.put(
        `${api}/users/mine`,
        body,
        {headers: {
          'Accept': "application/json",
          'Authorization': `Bearer ${data.token}`,
        }}
      ).then(res => console.log(res.data))
    }) 
  } catch (error) {
    console.error(error);
  }
}

export async function createUser(body) {
  try {
    const response = await axios.post(
      `${api}/users/register`,
      body,
      {headers: {
        'Content-Type': 'application/json'
      }}
    );
    return response.data
  } catch (error) {
    console.error(error);
  }
}

// createUser({
//   "username": "test",
//   "email": "test@email.com",
//   "password": "passtest",
//   "first_name": "test",
//   "last_name": "test",
//   "phone": "123456",
//   "address": "address",
//   "city": "city"
// })

export async function deleteUserById(token, id) {
  try {
    getToken(token).then(data => {
      axios.delete(
        `${api}/users/${id}`,
        {headers: {
          'Accept': "application/json",
          'Authorization': `Bearer ${data.token}`,
        }}
      ).then(res => console.log(res.data))
    }) 
  } catch (error) {
    console.error(error);
  }
}

// deleteUserById(admin_data, 4)