import React, {useState} from "react";
import Card from "./Card";
import './login.css'


export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // function handle(){
        if((localStorage.getItem('Email') === email) &&(localStorage.getItem('Password'))===password){
            return <Card/>
        }
    // }
    

    return(
        <div className="main">
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
            {/* <button className="btn btn-primary" onClick={handle}>Log in</button> */}
        </div>
    );
}