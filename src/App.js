import React from "react";
import "./styles.css";
import About from "./About";
import Shop from "./Shop";
import Nav from "./Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Addproduct from "./Addproduct";


export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/addproduct" element={<Addproduct/>}/>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <h1 className="heading">Welcome to E-Commerce</h1>
      
      <h4 style={{paddingLeft:"12cm"}}>This is E-commerce website you can shop what you want</h4>
      <img src="https://www.tigren.com/wp-content/uploads/2020/11/Inspiring-ECommerce-Website-Design.png" style={{padding:"10%"}}></img>
    </>
  );
}