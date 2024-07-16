import React from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Landing_Page } from "./LandingPage";
import { Password_page } from "./PasswordPage";
import { SigninPage } from "./SigninPage";
import { Card } from "./Card";
import { auth } from "./Firebase";
import { onAuthStateChanged } from "firebase/auth";
 
const App=()=>{
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(!user && !["/", "/password"].includes(location.pathname )){
        navigate("/signin")
      }else if(user && ["/signin", "/", "/password"].includes(location.pathname )){
        navigate("/card");
      }
    });
  },[location])
  return(
    <>
      <Routes>
        <Route path="/" element= {<Landing_Page email={email} updateEmail={(value)=>{setEmail(value)}}/>} />
        <Route path="/password" element= {<Password_page email={email}/>} />
        <Route path="/signin" element= {<SigninPage/>}  email= {email}/>
        <Route path="/card" element={<Card/>}/>
      </Routes>
    </>
  );
}
export default App;