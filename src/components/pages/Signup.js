import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../../Css/Signup.css";
const Signup = (props) => {

  const [credentials, setCredentials] = useState({ name: '',email: '',password: '', cpassword: '', });
  const Navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, email, password} = credentials;
    Navigate("/");
  }
  const onChange = (e) => { setCredentials({ ...credentials, [e.target.name]: e.target.value }); }

  const style = {
    display:'block',
    margin:'auto',
    width:'25rem',
} 

  return (
    <div className='Signup text-center'>
      <h2>Register</h2>
      <p>Please fill in the information below:</p>
      <form style={style} onSubmit={handleSubmit} className="my-4">
          <input type="text" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" onChange={onChange} name="fname" minLength={3} id="fname" placeholder='FirstName'/>
          <input type="text" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" onChange={onChange} name="lName" id="lName" required placeholder='LastName'/>
          <input type="email" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" onChange={onChange} name="email" id="email" aria-describedby="emailHelp" placeholder='Email' required />
          <input type="password" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" onChange={onChange} name="password" minLength={3} id="password" placeholder='Password' required/>
          <button type="submit" className="btn rounded-0 border border-1 border-dark w-100 py-2 px-3">CREATE MY ACCOUNT</button>
      </form>
    </div>
  );
}

export default Signup;
