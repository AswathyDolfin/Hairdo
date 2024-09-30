import { useContext } from "react";
import { Mycontext } from "./Mycontext";
import { useNavigate } from "react-router-dom";
function Cart() {
    const { cartproducts, setcartproducts } = useContext(Mycontext)
    console.log("cart product page", cartproducts);
    const nav = useNavigate()
    return (
        <div>
            <h1>CART</h1>
            <div>
                {cartproducts.map((dat) => (
                    <div>
                        <h1>{dat.Id}</h1>
                        <h2>{dat.Name}</h2>
                        <h3>{dat.Author}</h3>
                        <img src={dat.Image} alt="img" ></img>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Cart