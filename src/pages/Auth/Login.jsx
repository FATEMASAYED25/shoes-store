import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {

    const [username,setUsername]=useState();
    const [password,setPassword]=useState();
    const [form, setForm]=useState();
    const [token, setToken]=useState()

useEffect(()=>{
    axios.post('https://backende-commerc.herokuapp.com/api/users/login', form,
    {headers: {
        'Content-Type': 'application/json'
        }}
        )
        .then(function (response) {
        setToken(response)
        })
        .catch(function (error) {
        console.log(error);
        });

console.log(token)

},[form])

    return (
<>
    <section className="form">
        <label>Username</label>
        <input type="text" name="username" placeholder='username' className='input'  onChange={(event)=>{setUsername(event.target.value)}}/><br/>
        <label>Password</label>
        <input type="password" name='password' placeholder='Enter your password' className='input'   onChange={(event)=>{setPassword(event.target.value)}}/><br/>
        <label>Enter Submit</label>
        <button className="submit" onClick={()=>{setForm({username, password})}}>Submit</button><br/>
    </section>
</>
    )
}

export default Login