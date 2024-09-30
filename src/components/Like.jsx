import { useContext } from "react";
import { Mycontext } from "./Mycontext";
import { Asymbols } from "./Data2"
import {AiFillDislike} from "react-icons/ai"
function Like() {
    const { likeproducts, setLikeproducts } = useContext(Mycontext)
    console.log("like product page", likeproducts);
    function Unlikebtn(prod){
        setLikeproducts(likeproducts.filter((dt)=>dt !==prod))
    }
    return (
        <div>
            <h1>LIKED PRODUCTS</h1>
            <div>
                {likeproducts.map((data) => (
                    <div>
                        <h1>{data.Id}</h1>
                        <h2>{data.Name}</h2>
                        <h3>{data.Author}</h3>
                        <img src={data.Image} alt="img" ></img>
                        <button onClick={()=>Unlikebtn(data)}><AiFillDislike/></button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Like