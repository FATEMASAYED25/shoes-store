import React from 'react';
import axios from 'axios';
import{useState,useEffect} from "react";




const Register = () => {
const [username, setUsername]=useState();
const [email, setEmail]=useState();
const [firstname, setFirstname]=useState();
const [lastname, setLastname]=useState();
const [password, setPassword]=useState();

const [phone, setPhone]=useState();
const [address, setAddress]=useState();
const [city, setCity]=useState();


const [form, setForm]=useState();


const [token, setToken]=useState();



useEffect(()=>{
    console.log(form)
    axios.post('https://backende-commerc.herokuapp.com/api/users/register', form,
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

            <label>username</label>
                <input type="text" name="username" placeholder='username' className='input' onChange={(event)=>{setUsername(event.target.value)}} /><br/>
            <label>email</label>
                <input type="email" name="email" placeholder='email' className='input' onChange={(event)=>{setEmail(event.target.value)}}/><br/>
            <label>firstname</label>
                <input type="text" name="firstname" placeholder='firstname'className='input' onChange={(event)=>{setFirstname(event.target.value)}}/><br/>
            <label>lastname</label>
                <input type="text" name="lastname" placeholder='lastname' className='input' onChange={(event)=>{setLastname(event.target.value)}}/><br/>
            <label>password</label>
                <input type="password" name="password" placeholder='password' className='input' onChange={(event)=>{setPassword(event.target.value)}}/><br/>
            <label>phone</label>
                <input type="tel" name="phone" placeholder='phone'className='input' onChange={(event)=>{setPhone(event.target.value)}}/><br/>
            <label>address</label>
                <input type="text" name="address" placeholder='address' className='input' onChange={(event)=>{setAddress(event.target.value)}}/><br/>
                <label>city</label>
                <input type="text" name="city" placeholder='city' className='input' onChange={(event)=>{setCity(event.target.value)}}/><br/>
                <label>Enter Submit</label>
                <button  name='submit'  className='submit' onClick={()=>{setForm({username, email, firstname, lastname, password, phone, address, city})}} > Submit </button><br/>
        </section>
        
        </>
        )

}

export default Register