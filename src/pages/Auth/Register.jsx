import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { register } from "../../api/auth";

const Register = () => {
  //   const [username, setUsername] = useState();
  //   const [email, setEmail] = useState();
  //   const [firstname, setFirstname] = useState();
  //   const [lastname, setLastname] = useState();
  //   const [password, setPassword] = useState();
  //   const [phone, setPhone] = useState();
  //   const [address, setAddress] = useState();
  //   const [city, setCity] = useState();
  //   const [form, setForm] = useState();
  //   const [token, setToken] = useState();
  const [user, setUser] = useState({
    username: "",
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    phone: "",
    address: "",
    city: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function onSubmit(e) {
    e.preventDefault();

    let formData = new FormData();
    formData.append("username", user.username);
    formData.append("email", user.email);
    formData.append("firstname", user.firstname);
    formData.append("lastname", user.lastname);
    formData.append("password", user.password);
    formData.append("phone", user.phone);
    formData.append("address", user.address);
    formData.append("city", user.city);

    formData.forEach((data) => console.log(data));
    register(formData);

    setUser({
      username: "",
      email: "",
      firstname: "",
      lastname: "",
      password: "",
      phone: "",
      address: "",
      city: "",
    });
    window.location = "/Login";
  }

  return (
    <>
      <section className="form">
        <label>username</label>
        <input
          type="text"
          value={user.username}
          name="username"
          placeholder="username"
          className="input"
          onChange={handleChange}
        />
        <br />
        <label>email</label>
        <input
          type="email"
          value={user.email}
          name="email"
          placeholder="email"
          className="input"
          onChange={handleChange}
        />
        <br />
        <label>firstname</label>
        <input
          type="text"
          value={user.firstname}
          name="firstname"
          placeholder="firstname"
          className="input"
          onChange={handleChange}
        />
        <br />
        <label>lastname</label>
        <input
          type="text"
          value={user.lastname}
          name="lastname"
          placeholder="lastname"
          className="input"
          onChange={handleChange}
        />
        <br />
        <label>password</label>
        <input
          type="password"
          value={user.password}
          name="password"
          placeholder="password"
          className="input"
          onChange={handleChange}
        />
        <br />
        <label>phone</label>
        <input
          type="tel"
          name="phone"
          value={user.phone}
          placeholder="phone"
          className="input"
          onChange={handleChange}
        />
        <br />
        <label>address</label>
        <input
          type="text"
          name="address"
          value={user.address}
          placeholder="address"
          className="input"
          onChange={handleChange}
        />
        <br />
        <label>city</label>
        <input
          type="text"
          name="city"
          value={user.city}
          placeholder="city"
          className="input"
          onChange={handleChange}
        />
        <br />
        <label>Enter Submit</label>
        <button name="submit" className="submit" onClick={onSubmit}>
          Submit
        </button>
        <br />
      </section>
    </>
  );
};

export default Register;
