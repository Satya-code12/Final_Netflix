import React, { useState } from "react";
import './Signin.css';
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './Firebase';


const SigninPage = ()=>{

  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSignin = async (event) => {
    event.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Successfully signed in!");
    } catch (error) {
      setError(error.message);
    }
  };

  const navHome =()=>{
    navigate("/");
  }

  return(
    <>
      <div className="signout-pg">
        <div className="navbar">
          <img src="logo.png" alt="logo" className="signin-logo"/>
          <button className="signout-btn" onClick={navHome}> Home </button>
        </div>
        <div style={{backgroundColor: "black", height: "1.2px"}}></div>
        <div className="signin-div">
            <h2>Great, let's login now through your email</h2><br />
            <input type="email" placeholder="Enter Email" required style={{
              height: "3rem",
              width: "20rem",
              padding: ".2rem"
            }}  onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Enter Password" required style={{
              height: "3rem",
              width: "20rem",
              padding: ".2rem",
              marginTop: ".5rem"
            }} onChange={(e) => setPassword(e.target.value)}/>
            <button style={{
              height: "3rem",
              width: "20rem",
              padding: ".2rem",
              marginTop: ".5rem",
              cursor: "pointer",
              background: "red",
              color: "white",
              fontSize: "1.2rem",
              border: "none"
            }} onClick={onSignin}>Sign in</button>
        </div>
      </div>
    </>
  );
}
export { SigninPage };