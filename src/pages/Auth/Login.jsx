import { useState } from "react";
// import { useEffect } from "react";
// import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { login } from "../../api/auth";

const Login = () => {
  //   const [username, setUsername] = useState();
  //   const [password, setPassword] = useState();
  //   const [form, setForm] = useState();
  //   const [token, setToken] = useState();

  const [user, setUser] = useState({
    username: "",
    password: "",
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
    // const userToken = JSON.parse(localStorage.getItem("token"));

    let formData = new FormData();
    formData.append("username", user.username);
    formData.append("password", user.password);

    formData.forEach((data) => console.log(data));
    login(formData);

    setUser({
      username: "",
      password: "",
    });
    window.location.reload();
  }

  return (
    <>
      <Link to="/Register">
        <button id="link">Register, If you don't have an account</button>
      </Link>

      <section className="form">
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="username"
          className="input"
          value={user.username}
          onChange={handleChange}
          //   onChange={(event) => {
          //     event.preventDefault();
          //     setUsername(event.target.value);
          //   }}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="input"
          value={user.password}
          onChange={handleChange}
          //   onChange={(event) => {
          //     event.preventDefault();
          //     setPassword(event.target.value);
          //   }}
        />
        <br />
        <label>Enter Submit</label>
        <button className="submit" onClick={onSubmit}>
          Submit
        </button>
        <br />
      </section>
    </>
  );
};

export default Login;
