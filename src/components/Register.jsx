import { useContext, useState } from "react";
import { Mycontext } from "./Mycontext";
import { useNavigate } from "react-router-dom";
function Reg(){
    const{user,setUser}=useContext(Mycontext)
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const nav=useNavigate()
    function isUserAlreadyRegistered(){        
    return user.find((data)=> data.email===email);
    }
console.log(user);
    console.log(name);
    function buttonClick(){
        if(isUserAlreadyRegistered()){
            alert("User Already Registered")
            return
        }
        const userData ={name,email,password}
        setUser([...user,userData]);
        nav("/login")
        console.log("hloo",user)
        console.log(userData);
    }
    
      return(
        <div>
            <h1>REGISTER</h1>
            <div>
            <input 
                type="name"
                placeholder="Name"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                 />
                <input 
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                 />
                <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                 />
                 <br /><br />
                 <button onClick={buttonClick}>Done</button>
            </div>
        </div>
      )  
    
}
export default Reg