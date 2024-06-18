import React, { useState } from 'react';
import "./LoginSignup.css";
import emailIcon from '../Assets/email.png';
import passwordIcon from '../Assets/password.png';
import personIcon from '../Assets/person.png';

function LoginSignup() {
    const [action, setAction] = useState("Login");
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async () => {
        if (fullname === "" || email === "" || password === "") {
            alert("Please fill all fields");
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Fullname: fullname, email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                alert("Signup successful");
            } else {
                alert(data.message || "Signup failed");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred");
        }
    };

    const handleButtonClick = (newAction) => {
        setAction(newAction);
        if (newAction === "SignUp") {
            handleSignup();
        }
    };

    return (
        <div className="main">
            <div className='container'>
                <div className="login-title">
                    <header>{action}</header>
                </div>

                {action === "Login" ? null : (
                    <div className='inputform'>
                        <img src={personIcon} alt="" />
                        <input
                            style={{ width: '240px', height: '35px' }}
                            type="text"
                            placeholder='Full name'
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                        />
                    </div>
                )}

                <div className='inputform'>
                    <img src={emailIcon} alt="" />
                    <input
                        style={{ width: '240px', height: '35px' }}
                        type="text"
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='inputform'>
                    <img src={passwordIcon} alt="" />
                    <input
                        style={{ width: '240px', height: '35px' }}
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {action === "Login" ? (
                    <span className='Forgot'>Forgot password?<a href='www.google.com'>Click here</a></span>
                ) : null}

                <div className="buttons">
                    <button
                        className={action === "Login" ? "blue" : "white"}
                        onClick={() => handleButtonClick("Login")}
                    >
                        Login
                    </button>
                    <button
                        className={action === "Login" ? "white" : "blue"}
                        onClick={() => handleButtonClick("SignUp")}
                    >
                        SignUp
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;
