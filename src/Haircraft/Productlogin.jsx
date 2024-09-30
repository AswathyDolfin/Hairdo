import { useContext } from "react"
import { Mycontext } from "../components/Mycontext"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import '../Style/Productlogin.css'
function Plogin() {
    const { puser, setLogUser } = useContext(Mycontext)
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");

    const nav = useNavigate();
    function loginBtn() {
        const LoggedUser = puser.find(
            (userdata) => userdata.email === email && userdata.pass === pass
        );if (LoggedUser && !LoggedUser.banned) {
            setLogUser([LoggedUser]);
            alert("Login successful");
            nav("/");
          } else if (LoggedUser && LoggedUser.banned) {
            alert("Your id is banned. Please contact admin.");
          } else {
            alert("Invalid email or password");
          }
        }

       

    return (
        <div >
            <div class="to">
                <div className='lo'><p>H.A.I.R.D.O</p></div>
            </div>
            <div style={{ height: "110px" }}></div>
            <div class="b">
                <img
                    className="bg"
                    src="https://i.pinimg.com/564x/0a/08/a3/0a08a38bb7d39977d084e193f2e50ba8.jpg" />
                <div className="centered">
                    <h3 className="login">LOGIN </h3>
                    <input className="q1" type="Name" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)} />
                    <br /><br />
                    <input className="q2" type="email" placeholder="email" value={email} onChange={(e) => setemail(e.target.value)} />
                    <br /><br />
                    <input className="q3" type="password" placeholder="Password" value={pass} onChange={(e) => setpass(e.target.value)} />
                    <br /><br />
                    <button className="q4" onClick={loginBtn}>Login</button>
                    <h5 className="new"><i> NEW HERE?</i>{" "}</h5>
                    <span> </span>
                    <Link className="regL" to={"/reg"}> {" "} <i>Create an account</i></Link>
                </div>
            </div>
        </div>
    );
}
export default Plogin