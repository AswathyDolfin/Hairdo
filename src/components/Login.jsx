import { useContext, useState } from "react"
import { Mycontext } from "./Mycontext"
import { useNavigate } from "react-router-dom"

function Login() {
    const { user, setLogUser } = useContext(Mycontext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const nav = useNavigate()
    function loginbtn() {
        const loggedUser = user.find(
            (userData) => userData.email == email && userData.password == password
        )
        if (loggedUser) {
            setLogUser([loggedUser])
            alert("Login sucessful")
            nav("/data2")
        } else {
            alert("invalid email or password")
        }
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <div>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br /><br />
                <button onClick={loginbtn}>Login</button>
            </div>
        </div>
    )
}
export default Login