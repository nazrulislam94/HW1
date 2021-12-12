import React from "react";
import Menu from "./Components/Menu.js";
import Home from "./Components/Home.js"
import AboutMe from "./Components/AboutMe.js"
import Register from "./Components/Register.js";
import Login from "./Components/Login.js";
import Contact from "./Components/Contact.js";
import '../src/Css/index.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div >
      
      <Menu />

      <Routes>

      <Route path="/" exect element={<Home />} />
      <Route path="/AboutMe" element={<AboutMe />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />

      </Routes>
       

     
     
    </div>
  );
}

export default App;
