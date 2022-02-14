import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import "./signup.css"


export default function Signup() {

    // const history = useHistory();
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    let navigate = useNavigate();

    const handle = () => {
        
        localStorage.setItem('Name', name);
        localStorage.setItem('Email', email);
        localStorage.setItem('Password', password);
        alert("Successfully created");
        navigate ("/login");
        
     };
      const handleLogIn = ()=>{
        navigate ("/login");
      }

    return (
        <form className="form">
            <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">Full Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputEmail3" placeholder="Enter your full Name" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
            </div>
            <div className="row mb-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail3" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
            </div>
            <div className="row mb-3">
                <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword3" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            <button className="btn btn-primary" onClick={handle}>Sign in</button>
            <button className="btn btn-primary" onClick={handleLogIn}>Log in</button>
        </form>
        
    );
}