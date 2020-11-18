import React,{useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'
import styles from './Signup.css'

export default function Signup(){
    let navigate = useNavigate();

    const [email, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSignup = () => {
        console.log("Trigger")
        axios.post("https://recipe-finder-db-project-back.herokuapp.com/auth/signup",{email,password})
        .then(res => {alert("Signup successful"); navigate("/login")})
        .catch(err => alert(err))

    }
  return (
    <div className="login">
      <div className="login-page">
        <div className="form">
            <input type="text" onChange={e=>setUsername(e.target.value)} placeholder="username" />
            <input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
            <button onClick={()=>handleSignup()}>
              signup
            </button>
            <p className="message">Not registered?
             <Link to="/login"> Login </Link>
            </p>
          
        </div>
      </div>
    </div>

  );
}