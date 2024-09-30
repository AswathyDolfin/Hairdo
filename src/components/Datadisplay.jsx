import { Symbols } from "./Data";
import { Mycontext } from "./Mycontext";
import { useContext } from "react";

function Display() {
    const data = useContext(Mycontext)
    console.log("dt", data);
    return (
        <div>
            {
                data.map((name) =>
                    <div>
                        <h1>{name.Id}</h1>
                        <h2>{name.Name}</h2>
                        <h3>{name.Category}</h3>
                        <h4>{name.Discription}</h4>
                        <img width={300} height={300} src={name.Image} alt="img" />
                    </div>
                )
            }

        </div>
    )

}
export default Display