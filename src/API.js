const api = "https://backende-commerc.herokuapp.com/api";

// Generate a unique token
// let token = localStorage.token;

// const headers = {
//   Accept: "application/json",
//     Authorization: token,
// };

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

export async function userById(id) {
  let data = null;
  try {
    let res = await fetch(`${api}/users/${id}`, {
      method: "GET",
      headers: {
        // Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });
    data = await res.json();
  } catch (err) {
    console.error(err);
  }
  return data;
}

export async function updateUser() {
  let data = null;
  try {
    let res = await fetch(`${api}/users/mine`, {
      method: "PUT",
      headers: {
        // Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });
    data = await res.json();
  } catch (err) {
    console.error(err);
  }
  return data;
}
