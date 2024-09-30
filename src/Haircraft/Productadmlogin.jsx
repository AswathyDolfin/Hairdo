
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Style/Productadmlogin.css'
const AdminLoginPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const nav = useNavigate()
  const handleLogin = () => {

    const adminCredentials = {
      name: 'aswathy',
      email: 'aswathy@123',
      password: '1234',
    };


    if (email === adminCredentials.email && password === adminCredentials.password) {
      alert('Admin login successful!');
      nav("/adm");


    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div>
      <div class="to">
        <div className='lo'><p>H.A.I.R.D.O</p></div>
      </div>
      <div style={{ height: "110px" }}></div>
      <div className="b">
        <h1 >ADMIN LOGIN</h1>
        <div className="centered">
          <input className="p11" placeholder="Name" type="name" value={name} onChange={(e) => setName(e.target.value)} />
          <br /> <br /> <br />
          <input className="p11"
            placeholder="Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br /><br /><br />
          <input className="p11" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />   <br /><br />
          <button className="lgbtn" onClick={handleLogin}>Login</button>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;