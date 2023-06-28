import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import ExercisesPage from "./ExercisesPage";
// import "./Login-register.module.css";


function Log() {
  
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [isLoginPage, setIsLoginPage] = useState(true);

function handleLogin() {
  setIsLoggedIn(true);
}

function toggleLoginPage() {
  setIsLoginPage(!isLoginPage);
}
  return (
    <div className="Log">
      {isLoggedIn ? (
        <ExercisesPage />
      ) : isLoginPage ? (
        <Login onLogin={handleLogin} togglePage={toggleLoginPage} />
      ) : (
        <Register togglePage={toggleLoginPage} />
      )}
    </div>
  );
}

export default Log;
