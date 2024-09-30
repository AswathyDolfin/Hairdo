import "../Style/Watchlist.css"
import { Link } from "react-router-dom"
function Watch(props) {
    console.log(props.dataar);
    const ArrayObj = props.dataar
    console.log("arrrayObj", ArrayObj);
    return (
        <div className="w1">
            <h3 className="w2">WATCH LIST</h3>
            <Link to={"/show"}>SHOWS</Link>
            <br />
            <Link to={"/"}>HOME</Link>
            <div style={{ color: "white" }}>
                {ArrayObj.map((data) => (
                    <div>
                        <h1>Moive: {data.Movie}</h1>
                    </div>
                ))}
            </div>
        </div>

    )
}
export default Watch