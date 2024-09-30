import "../Style/Netflix.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { Mycontext } from "./Mycontext";
import { useContext } from "react";
function Netflix(props) {
    console.log(props);
    const nav = useNavigate()
    function Showbtn() {
        nav("/show")
    }
    function Watchbtn() {
        nav("/Watchlist")
    }
    const [color, setColor] = useState("green")

    function change() {
        setColor("red")
    }
    const [count, setCount] = useState(0)
    function Increment() {
        setCount(count + 1)
    }
    function Reset() {
        setCount(0)
    }
    function Decrement() {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    const data = useContext(Mycontext)
    console.log("dt", data);
    return (
        <div className="n1">
            <h1 className="n2">NETFLIX</h1>
            <button onClick={Showbtn}>SHOW</button>
            <button onClick={Watchbtn}>WATCH</button><br></br>
            <h1 style={{ color }}> {color}</h1>
            <button onClick={change}>CHANGE COLOR</button>
            <h1 style={{ color: "white" }}>{count}</h1>
            <button onClick={Increment}>INCREMENT</button>
            <button onClick={Reset}>RESET</button>
            <button onClick={Decrement}>DECREMENT</button>
            <div style={{ color: "white" }}>
                {props.data}
            </div>
            {
                data.map((movie) =>
                    <h3>{movie.Movie}</h3>
                )
            }
        </div>
    )
}
export default Netflix