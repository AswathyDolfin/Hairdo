import { useContext } from "react"
import { Mycontext } from "./Mycontext"
import { useParams } from "react-router-dom"
import { BsFillCartFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import '../Style/HairDetails.css'

function HairDetails() {

  const nav = useNavigate()
  function cart() {
    nav("/cart")
  }
  function like() {
    nav("/like")
  }
  function home() {
    nav("/")
  }

  const { prod, logUser } = useContext(Mycontext)

  const { id } = useParams()
  console.log("prodid", id);

  const product = prod.find(item => item.id == id)
  console.log("details", product);

  const { cartprd, setCartprd } = useContext(Mycontext)
  const addtoCartprd = (prod) => {
    if (logUser.length > 0) {
      const existingPdIndex = cartprd.findIndex(item => item.id === prod.id);
      if (existingPdIndex !== -1) {
        alert(`"${prod.Name}" is already added to the cart`)
      } else {
        setCartprd([...cartprd, { ...prod, quantity: 1 }]);
        alert(`"${prod.Name}" is  added to  cart`)
      }
    }
    else {
      alert(`Please login to add product in cart`)
    }
  }

  const { likeprd, setLikeprd } = useContext(Mycontext)
  const addtolikeprd = (prod) => {
    if (likeprd.includes(prod)) {
      setLikeprd(likeprd.filter((dt) => dt !== prod))
      alert(`"${prod.Name}" is removed from wishlist`)
    } else {
      setLikeprd([...likeprd, prod])
    }
  }

  return (
    <div>
      <div class="tops">
        <div className='logs'><p>H.A.I.R.D.O</p></div>
        <div className='topicons'>
          <button className='cs' onClick={cart}><BsFillCartFill />{cartprd.length > 0 && <span style={{ fontSize: "15px", color: "red" }}>{cartprd.length}</span>}</button>
          <button className='ls' onClick={like}><FaHeart />{likeprd.length > 0 && <span style={{ fontSize: "15px", color: "red" }}>{likeprd.length}</span>}</button>
          <button className='homes' onClick={home}><FaHome /></button>
        </div>
      </div>
      <div style={{ height: "200px" }}></div>
      <div className="d3s">
        <div className="imgs">
          <img width={350} height={350} src={product.Image} alt={product.Name} />
        </div>
        <div className="d1s">
          <h3 style={{ fontSize: "35px" }}>{product.Name}</h3>
          <p className="abt">{product.Abt}</p>
          <p>Price: only ₹{product.Price}/-</p>
        </div>
        <div className="lcs">
          <button className='lis' onClick={() => addtolikeprd(product)}>{
            likeprd.includes(product) ? <FaHeart style={{ color: "red" }} /> : <FaHeart style={{ color: "black" }} />
          }</button>
          <button className='cas' onClick={() => addtoCartprd(product)}>{
            cartprd.includes(product) ? "ALREADY IN CART" : "ADD TO CART"
          }</button>
        </div>
      </div>
    </div>
  )

}

export default HairDetails