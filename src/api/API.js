import axios from 'axios'

const api = "https://backende-commerc.herokuapp.com/api";

// product functions...
export async function allProducts() {
  try {
    const response = await axios.get(
      `${api}/products/`,
      {headers: {
        'Content-Type': 'application/json',
      }});
      return response.data
  } catch (error) {
    console.error(error);
  }
}

export async function getProductById(id) {
  try {
    const response = await axios.get(
      `${api}/products/${id}`,
      {headers: {
        'Content-Type': 'application/json',
      }});
      return response.data
  } catch (error) {
    console.error(error);
  }
}

export async function deleteProduct(id) {
  try {
    const user = JSON.parse(localStorage.getItem('token'))
    const response = await axios.delete(
      `${api}/products/${id}`,
      {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }});
      return response.data
  } catch (error) {
    console.error(error);
  }
}

// user functions..
export async function allUsers() {
  try {
    const user = JSON.parse(localStorage.getItem('token'))
    const response = await axios.get(
      `${api}/users/`,
      {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }});
      return response.data
  } catch (error) {
    console.error(error);
  }
}

export async function getUserById(id) {
  try {
    const user = JSON.parse(localStorage.getItem('token'))
    const response = await axios.get(
      `${api}/users/${id}`,
      {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }});
    return response.data
  } catch (error) {
    console.error(error);
  }
}

export async function updateUserInfo(body) {
  try {
    const user = JSON.parse(localStorage.getItem('token'))
    const response = await axios.put(
      `${api}/users/mine`,
      body,
      {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }});
    console.log(response.data)
    return response.data
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

export async function deleteUserById(id) {
  try {
    const user = JSON.parse(localStorage.getItem('token'))
    const response = await axios.delete(
      `${api}/users/${id}`,
      {headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }});
    return response.data
  } catch (error) {
    console.error(error);
  }
}