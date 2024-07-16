import React from "react";
import { Features } from "./Features";
import { useNavigate } from "react-router-dom";
import {  signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from './Firebase';


const Landing_Page=({email, updateEmail})=>{
  const navigate = useNavigate();

  React.useEffect(()=>{
    updateEmail("")
  }, [])

  const signinGoogle = async () => {
    try {
    await signInWithPopup(auth,googleProvider);
    } catch (err){
      console.error(err);
    }
  };
  return(
    <>
        <div className="header">
        <nav>
          <img src="logo.png" className="logo" alt="Logo" />
          <div>
            <button className="language-btn">English <img src="https://cdn4.iconfinder.com/data/icons/ios-edge-glyph-3/25/Down-Carrot-512.png" alt="Dropdown icon" /></button>
            <button onClick={signinGoogle}> Signin with google </button>
            {/* <button type="button" onClick={onSubmit}>Sign In</button> */}
          </div>
        </nav>
        <div className="header-content">
          <h1>Unlimited movies, TV shows and more.</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="email-signup">
            <input type="email" className="email-inp" placeholder="Email address" required onChange={(e)=>{
              updateEmail(e.target.value);
            }}/>
            <button onClick={initateSignUp}>Get Started</button>
          </div>
        </div>
      </div>
      <Features/>
    </>
  );

  function initateSignUp(){
    if(!email){
      alert("Please enter an email")
      return
    }

    navigate("/password")
  }

}
export { Landing_Page };