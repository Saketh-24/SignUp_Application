import React from 'react'
import { useState } from 'react';
import "./LoginSignup.css"
import emailIcon from '../Assets/email.png';
import passwordIcon from '../Assets/password.png';
import personIcon from '../Assets/person.png';



function LoginSignup()
{
const [action,setAction] = useState("Login")
  return (
    <div className="main">
        <div className='container'>

        <div className="login-title">
        <header>{action}</header>
        </div>

        {action==="Login"?<div></div>: <div className='inputform'>
            <img src={personIcon} alt="" />
            <input style={{ width: '240px', height: '35px' }} type="text" placeholder='Full name' />
        </div>}

        <div className='inputform'>
            <img src={emailIcon} alt="" />
            <input style={{ width: '240px', height: '35px' }} type="text" placeholder='Email' />
        </div>

        <div className='inputform'>
            <img src={passwordIcon} alt="" />
            <input style={{ width: '240px', height: '35px' }} type="password" placeholder='Password' />
        </div>

        
        {action==="Login"?<span className='Forgot'>Forgot password?<a href='#'>Click here</a></span>:<span></span>}
        
        <div className="buttons">
            <button className={action==="Login"?"blue":"white"} onClick={()=>{setAction("Login")}}>Login</button>
            <button className={action==="Login"?"white":"blue"} onClick={()=>{setAction("SignUp")}}>SignUp</button>
        </div>

    </div>
    </div>
  );
}

export default LoginSignup
