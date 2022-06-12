import React,{useState} from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Footer from './components/Footer';
import Navigation from "./components/Navigation" ;
import Product from "./pages/Product"
import Categories from './components/Categories';
import ShoppingCart from './pages/ShoppingCart';
function App() {

  
 
  return (

    
  <React.Fragment>
    <Navigation />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/Product/:id" element={<Product/>} />
    <Route path="/Categories" element={<Categories/>} />
    <Route path="/ShoppingCart/:id" element={<ShoppingCart/>} />


    </Routes>
   
    <Footer/>

  </React.Fragment>
  )
}

export default App
