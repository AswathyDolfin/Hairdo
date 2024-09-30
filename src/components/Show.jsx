import "../Style/Show.css"
import { Link } from "react-router-dom"
import { useState } from "react";
function Show(props) {
    console.log(props.dataobj);
    const [count, setCount] = useState(0)
    return (
        <div className="s1">
            <h4 className="s2">SHOWS</h4>
            <div>
                <img className="s3" src="https://deadline.com/wp-content/uploads/2023/04/harry-potter.jpg?w=681&h=383&crop=1" alt="HARRY POTTER" />
                <br />
                <label className="s4">HARRY POTTER</label>
            </div>
            <div style={{ color: "white" }}>
                <h1>Director :{props.dataobj.director}</h1>
                <h1>Theme :{props.dataobj.theme}</h1>
                <Link to={"/watchlist"}>WATCHLIST</Link> {""}{""}
                <Link to={"/"}>HOME</Link>
            </div>
        </div>

    )
}
export default Show