import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/auth";

const Login = () => {
  const navigate = useNavigate();
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
    login(user).then(res => {
      if (res.token){
        navigate('/home');
        window.location.reload(true);
      }
    })
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
