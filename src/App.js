import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import SitterProfile from './components/SitterProfile';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/sitter/:id" Component={SitterProfile} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={SignUp} />
      </Routes>
    </Router>
  );
};

export default App;