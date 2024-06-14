import React from 'react'
import "./LoginSignup.css"
import emailIcon from '../Assets/email.png';
import passwordIcon from '../Assets/password.png';
import personIcon from '../Assets/person.png';



function LoginSignup()
{
  return (
    <div className="main">
        <div className='container'>

        <div className="title">
        <header>SignUp</header>
        </div>

        <div className='inputform'>
            <img src={personIcon} alt="" />
            <input style={{ width: '240px', height: '35px' }} type="text" placeholder='Full name' />
        </div>

        <div className='inputform'>
            <img src={emailIcon} alt="" />
            <input style={{ width: '240px', height: '35px' }} type="text" placeholder='Email' />
        </div>

        <div className='inputform'>
            <img src={passwordIcon} alt="" />
            <input style={{ width: '240px', height: '35px' }} type="password" placeholder='Password' />
        </div>

        <div className="buttons">
            <button className="login">Login</button>
            <button className="signup">SignUp</button>
        </div>

    </div>
    </div>
  );
}

export default LoginSignup
