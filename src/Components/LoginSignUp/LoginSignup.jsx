import React from 'react'
import "./LoginSignup.css"
import emailIcon from '../Assets/email.png';
import passwordIcon from '../Assets/password.png';
import personIcon from '../Assets/person.png';



function LoginSignup()
{
  return (
    <div className='container'>
        <header>SignUp</header>
        <div className='inputform'>
            <img src={emailIcon} alt="" />
            <input type="text" />
        </div>

        <div className='inputform'>
            <img src={passwordIcon} alt="" />
            <input type="password" />
        </div>

        <div className='inputform'>
            <img src={personIcon} alt="" />
            <input type="text" />
        </div>
    </div>
  );
}

export default LoginSignup
