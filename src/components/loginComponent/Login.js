import React, { useState } from 'react';
import styles from './Login.css'
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
export default function Login() {
  const [email, setUsername] = useState("")
  const [password, setPassword] = useState("")
  let navigate = useNavigate();

  const handleLogin = ()=>{
    axios.post("https://recipe-finder-db-project-back.herokuapp.com/auth/login",{email,password})
    .then(res => {localStorage.setItem("token",res.data.accessToken); navigate("/allrecipe");
  })
    .catch(err => alert("Invalid Credentials"))
  }
  return (
    <div className="login">
      <div className="login-page">
        <div className="form">
            <input type="text" onChange={e=>setUsername(e.target.value)} placeholder="username" />
            <input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
            <button onClick={() => handleLogin()}>
              login
            </button>
            <p className="message">Not registered?
              <Link to="/signup">Create an account</Link>
            </p>
        </div>
      </div>
    </div>

  );
}