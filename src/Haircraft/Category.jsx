import { useContext } from "react"
import { Mycontext } from "../components/Mycontext"
import { useParams } from "react-router-dom"
import { FaHeart } from "react-icons/fa6";
import { BsFillCartFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import '../Style/Productdisplay.css'
function Cata() {
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

  const { selectedCat } = useParams()
  console.log("category", selectedCat);

  const product = prod.filter((pdt) => pdt.Haircare === selectedCat || pdt.Hairtools === selectedCat || pdt.Haircolor === selectedCat)
  console.log("catprodcare", product)

  const { likeprd, setLikeprd } = useContext(Mycontext)
  const addtolikeprd = (project) => {
    if (likeprd.includes(project)) {
      setLikeprd(likeprd.filter((dt) => dt !== project))
      alert(`"${prod.Name}" is removed from wishlist`)
    } else {
      setLikeprd([...likeprd, project])
    }
  }

  const { cartprd, setCartprd } = useContext(Mycontext)
  const addtoCartprd = (prod) => {
    if (logUser.length > 0) {
      const existingPdIndex = cartprd.findIndex(item => item.id === prod.id);
      if (existingPdIndex !== -1) {
        // const updatedCartprd = [...cartprd];
        // updatedCartprd[existingPdIndex].quantity++;
        // setCartprd(updatedCartprd);
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

  const HandleDisplay = (id) => {
    nav(`/hair/${id}`)
  }

  return (
    <div>
      <div class="top">
        <div className='log'><p>H.A.I.R.D.O</p></div>
        <div className='topicon'>
          <button style={{
            marginTop: "65px", fontSize: "25px", color: "white", border: "none", background: "none",
            cursor: "pointer", outline: " none"
          }} onClick={cart}><BsFillCartFill />{cartprd.length > 0 && <span style={{ fontSize: "15px", color: "red" }}>{cartprd.length}</span>}</button>
          <button className='l' onClick={like}><FaHeart />{likeprd.length > 0 && <span style={{ fontSize: "15px", color: "red" }}>{likeprd.length}</span>}</button>
          <button className='home' onClick={home}><FaHome /></button>
        </div>
      </div>
      <div style={{ height: "200px" }}></div>
      <div className="d1">
        {product.map((data) => (
          <div className="d3">
            <img width={250} height={250} src={data.Image} alt="img" onClick={() => HandleDisplay(data.id)} />
            <h3>{data.Name}</h3>
            <h3><i>Rs.</i>{data.Price}</h3>
            <div className="lc">
              <button className='li' onClick={() => addtolikeprd(data)}>{
                likeprd.includes(data) ? <FaHeart style={{ color: "red" }} /> : <FaHeart style={{ color: "black" }} />
              }</button>
              <button className='ca' onClick={() => addtoCartprd(data)}>{
                cartprd.includes(data) ? "ALREADY IN CART" : "ADD TO CART"
              }</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

}

export default Cata