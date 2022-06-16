import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




const Login = () => {

    const [username,setUsername]=useState();
    const [password,setPassword]=useState();
    const [form, setForm]=useState();
    const [token, setToken]=useState()

useEffect(()=>{
    axios.post('https://backende-commerc.herokuapp.com/api/users/login', {username, password},
    {headers: {
        'Content-Type': 'application/json'
        }}
        )
        .then(function (response) {
        setToken(response)
        localStorage.setItem("token",JSON.stringify(response.data))
        return response.data

        })
        .catch(function (error) {
        console.log(error);
        });

<<<<<<< HEAD
console.log(token)

=======
>>>>>>> 5af6b334f070b996c2ec10c4f62c65392cac353a
},[form])

    return (
<>
<Link to="/Register"><button id='link'>Register, If you don't have an account</button></Link>

    <section className="form">

        <label>Username</label>
        <input type="text" name="username" placeholder='username' className='input' value={username} onChange={(event)=>{event.preventDefault(); setUsername(event.target.value)}}/><br/>
        <label>Password</label>
        <input type="password" name='password' placeholder='Enter your password' className='input' value={password}  onChange={(event)=>{event.preventDefault(); setPassword(event.target.value)}}/><br/>
        <label>Enter Submit</label>
        <button className="submit" onClick={(event)=>{event.preventDefault(); setForm({username, password})}}>Submit</button><br/>
    </section>
</>
    )
}

export default Login