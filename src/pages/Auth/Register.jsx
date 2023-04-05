import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../api/API";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
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
    createUser(user).then(res => {
      if (res){
        navigate('/login');
      }
    })
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
          value={user.first_name}
          name="first_name"
          placeholder="firstname"
          className="input"
          onChange={handleChange}
        />
        <br />
        <label>lastname</label>
        <input
          type="text"
          value={user.last_name}
          name="last_name"
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
