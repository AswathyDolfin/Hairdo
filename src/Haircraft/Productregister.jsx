import { useContext } from "react"
import { Mycontext } from "./Mycontext"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '../Style/Productlogin.css'
function Preg() {
    const { puser, setPuser } = useContext(Mycontext)
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedInUserName, setLoggedInUserName] = useState("");
    const nav = useNavigate()

    function isUserAlreadyRegistered() {
        return puser.find((userdata) => userdata.email === email);
    }
    console.log(puser);
    console.log(name);
    function buttonClick() {
        if (isUserAlreadyRegistered()) {
            alert("User Already Registered")
            return
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert("Please enter a valid email address.");
          return;
        }
        if (pass.length < 6) {
          alert("Password must be at least 6 characters long .");
          return;
        }
        const userData = { name, email, pass }
        setPuser([...puser, userData]);
        nav("/log")
        console.log("hloo", puser)
        console.log(userData);
    }

    return (
        <div>
            <div class="to">
                <div className='lo'><p>H.A.I.R.D.O</p></div>
            </div>
            <div style={{ height: "110px" }}></div>
            <div class="b">
                <img
                    className="bg"
                    src="https://i.pinimg.com/564x/cf/b6/8e/cfb68ef38c61290e54766b082fcc62d2.jpg" />
                <div className="centered">
                    <h3 className="login">REGISTER</h3>
                    <input className="q1" type="Name" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)} />
                    <br /><br />
                    <input className="q2" type="email" placeholder="email" value={email} onChange={(e) => setemail(e.target.value)} />
                    <br /><br />
                    <input className="q3" type="password" placeholder="Password" value={pass} onChange={(e) => setpass(e.target.value)} />
                    <br /><br />
                    <button className="q4" onClick={buttonClick}>Done</button>
                </div>
            </div>
        </div>
    );
}
export default Preg