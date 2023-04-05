import React,{useState} from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Footer from './components/Footer';
import Navigation from "./components/Navigation" ;
import Product from "./pages/Product"
import Categories from './components/Categories';
import Cart from './pages/Cart';
import Help from './pages/Team/Help';
import Contact from './pages/Team/Contact';
import Adress from './pages/Team/Adress';
import News from './pages/Team/News';
import Returns from './pages/Team/Returns';
import Services from './pages/Team/Services';
import About from './pages/About';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Team from './pages/Team/Team';
import AccountSettings from "./components/Account-Settings/Account";
function App() {

  
 
  return (

    
  <React.Fragment>
    <Navigation />
    <Routes>
    <Route path="/" element={<Home />} />

    <Route path="/Contact" element={<Contact />} />
    <Route path="/Adress" element={<Adress />} />
    <Route path="/News" element={<News />} />
    <Route path="/Help" element={<Help />} />
    <Route path="/Team" element={<Team />} />
    <Route path="/Services" element={<Services />} />
    <Route path="/Returns" element={<Returns />} />
    <Route path="/About" element={<About />} />
    <Route path="/Account/*" element={<AccountSettings />} />
    <Route path="/Cart" element={<Cart />} />
    <Route path="/Product/:id" element={<Product/>} />
    <Route path="/Categories" element={<Categories/>} />
    <Route path="/Login" element={<Login/>} />
    <Route path="/Register" element={<Register/>} />
  

    </Routes>
   
    <Footer/>

  </React.Fragment>
  )
}

export default App
