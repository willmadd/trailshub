import React, {useState} from 'react';
import {__} from '../../translations/translator';
import {Link} from 'react-router-dom';
import './login.scss';
import * as api from '../../auth/api';
import { useDispatch } from "react-redux";
// import {getUserData }from '../../store/Login/actions';
// props.user
import sha256 from 'js-sha256';
import RouteID from '../../routes/routeID';
import { useHistory } from "react-router-dom";
import { initUser } from "../../store/Load/actions";


const Login = () => {

const history=useHistory();

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email:"",
        password:""
    })


    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState=>({
            ...prevState,
            [name]:value
        }));
    }

const handleSubmit = () => {
 const remember_me = true;
 const user = {email:formData.email, password: sha256(formData.password), remember_me}
 api.userSignIn(user)
 .then(res=>{
    localStorage.setItem("trailshub:all:userToken", res.data.access_token);
    dispatch(initUser(res.data.access_token));
    history.push(RouteID.memberDashboard)
 })
}

    return (
        <div className="login-modal">
        <div className="login">
            <h3>{__('Log in to your Trails Hub Account')}</h3>
            <input value={formData.email} type="email" name="email" id="email-login" onChange={(e)=>handleChange(e)}/>
            <input value={formData.password} type="password" name="password" id="password-login" onChange={(e)=>handleChange(e)}/>
            <button className="progress-button" type="button" onClick={()=>handleSubmit()}>Sign In</button>
            <Link to={'/forgotpassword'}>Forgot Password</Link>
        </div>
        </div>
    );
};

export default Login;