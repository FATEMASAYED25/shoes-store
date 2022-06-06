import React,{useState} from 'react'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Footer from './components/Footer';
import Navigation from "./components/Navigation" ;
function App() {

  
 
  return (

    
  <React.Fragment>
    <Navigation />
    <Home/>
    <Footer/>

  </React.Fragment>
  )
}

export default App
