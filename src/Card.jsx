import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from './Firebase';

const Card=()=>{

  const onSignout = async ()=>{
    try{
      await signOut(auth);
      console.log("User signout successfully");
    }catch (error){
      console.error("Error in signout ", error);
    }
  };

  return(
    <>
      <div style={{
        background: 'black',
        height: '100vh'
      }}>
          <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        padding: '.5rem 1rem'
      }}>
        <img src="logo.png" alt="" style={{
          width: '160px',
          cursor: 'pointer',
          marginLeft: '1px'
        }}/>
        <button style={{
          background: 'transparent',
          border: 'none',  color: 'white',
          fontSize: '1.2rem',cursor: 'pointer'
        }}>Home</button>
        <button style={{
          background: 'transparent',
          border: 'none',  color: 'white',
          fontSize: '1.2rem',cursor: 'pointer'
        }}>TV Shows</button>
        <button style={{
          background: 'transparent',
          border: 'none',  color: 'white',
          fontSize: '1.2rem',cursor: 'pointer'
        }}>Movies</button>
        <button style={{
          background: 'transparent',
          border: 'none',  color: 'white',
          fontSize: '1.2rem',cursor: 'pointer'
        }}>New & Popular</button>
        <button style={{
          background: 'transparent',
          border: 'none',  color: 'white',
          fontSize: '1.2rem',
          cursor: 'pointer'
        }}>My List</button>
        <button style={{
          background: 'transparent',
          border: 'none',  color: 'white',
          fontSize: '1.2rem',
          cursor: 'pointer'
        }}>Browse by Languages</button>
        <button style={{
          background: 'transparent',
          border: 'none',  color: 'white',
          fontSize: '1.2rem',
          cursor: 'pointer'
        }} onClick={onSignout}>Sign out</button>
      </div>
      <div style={{
          backgroundImage: 'url("https://help.nflxext.com/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png")',
          // filter: 'blur(8px)',
          // WebkitFilter: 'blur(8px)',
          height: '100vh',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}>

{/* ----------------------- Card set 1---------------------------------------- */}

        <p style={{padding: '.5rem'}}>New on Netflix</p>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '15rem',
        }}>
          <img style={{padding: '.5rem'}} src="https://www.indiewire.com/wp-content/uploads/2017/09/imperial-dreams-2014.jpg?w=426" alt="" />
          <img style={{padding: '.5rem'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1M_-XtZWSkLd0WpuMwYeVS55ztsR2tbFG0g&s" alt="" />
          <img style={{padding: '.5rem'}} src="https://www.indiewire.com/wp-content/uploads/2017/09/imperial-dreams-2014.jpg?w=426" alt="" />
          <img style={{padding: '.5rem'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1M_-XtZWSkLd0WpuMwYeVS55ztsR2tbFG0g&s" alt="" />
          <img style={{padding: '.5rem'}} src="https://www.indiewire.com/wp-content/uploads/2017/09/imperial-dreams-2014.jpg?w=426" alt="" />
        </div>

{/* -------------------------------Card set 2----------------------------------------- */}

        <p style={{padding: '.5rem'}}>New on Netflix</p>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '15rem',
        }}>
          <img style={{padding: '.5rem'}} src="https://www.indiewire.com/wp-content/uploads/2017/09/imperial-dreams-2014.jpg?w=426" alt="" />
          <img style={{padding: '.5rem'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1M_-XtZWSkLd0WpuMwYeVS55ztsR2tbFG0g&s" alt="" />
          <img style={{padding: '.5rem'}} src="https://www.indiewire.com/wp-content/uploads/2017/09/imperial-dreams-2014.jpg?w=426" alt="" />
          <img style={{padding: '.5rem'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1M_-XtZWSkLd0WpuMwYeVS55ztsR2tbFG0g&s" alt="" />
          <img style={{padding: '.5rem'}} src="https://www.indiewire.com/wp-content/uploads/2017/09/imperial-dreams-2014.jpg?w=426" alt="" />
        </div>

{/* -------------------------------Card set 3----------------------------------------- */}

<p style={{padding: '.5rem'}}>New on Netflix</p>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '15rem',
        }}>
          <img style={{padding: '.5rem'}} src="https://www.indiewire.com/wp-content/uploads/2017/09/imperial-dreams-2014.jpg?w=426" alt="" />
          <img style={{padding: '.5rem'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1M_-XtZWSkLd0WpuMwYeVS55ztsR2tbFG0g&s" alt="" />
          <img style={{padding: '.5rem'}} src="https://www.indiewire.com/wp-content/uploads/2017/09/imperial-dreams-2014.jpg?w=426" alt="" />
          <img style={{padding: '.5rem'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1M_-XtZWSkLd0WpuMwYeVS55ztsR2tbFG0g&s" alt="" />
          <img style={{padding: '.5rem'}} src="https://www.indiewire.com/wp-content/uploads/2017/09/imperial-dreams-2014.jpg?w=426" alt="" />
        </div>
        
        </div>
      </div>
    </>
  );
}
export { Card };