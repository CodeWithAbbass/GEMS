import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../Css/Login.css";

const Login = ({setProgress}) => {  
  const [credentials, setCredentials] = useState({ name: '',email: '',password: '', cpassword: '', });
  const onChange = (e) => { setCredentials({ ...credentials, [e.target.name]: e.target.value }); }
  const Navigate = useNavigate();

  useEffect(() => {
    setProgress(10);
    setProgress(30);
    setProgress(50);
    setProgress(100);
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const {name, email, password} = credentials;
    Navigate("/");
  }
  
  const style = {
    display:'block',
    margin:'auto',
    width:'25rem',
} 

  return (
         <div className='Login text-center'>
      <h2>Login In</h2>
      <p>Please enter your e-mail and password:</p>
      <form style={style} onSubmit={handleSubmit} className="my-4">
          <input type="email" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" onChange={onChange} name="email" id="email" aria-describedby="emailHelp" placeholder='Email' required />
          <input type="password" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" onChange={onChange} name="password" minLength={3} id="password" placeholder='Password' required/>
          <button type="button" className="btn rounded-0">Forgot Password?</button>
          <button type="submit" className="btn rounded-0 border border-1 border-dark w-100 py-2 px-3" onChange={onChange}>LOGIN</button>
          <div className="createOne">Don't have an account? <Link to={"/signup"}>Create one</Link></div>
      </form>
    </div>
  );
}

export default Login;
