import { useContext } from "react";
import { Mycontext } from "./Mycontext";
import { FaHeart } from "react-icons/fa6";
import { BsFillCartFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Plike() {
  const nav = useNavigate()
  function cart() {
    nav("/cart")
  }
  function home() {
    nav("/")
  }
  const { likeprd, setLikeprd,logUser } = useContext(Mycontext)
  console.log("like product page", likeprd);
  const addtolikeprd = (prod) => {
    if (likeprd.includes(prod)) {
      setLikeprd(likeprd.filter((dt) => dt !== prod))
      alert(`"${prod.Name}" is removed from wishlist`)
    } else {
      setLikeprd([...likeprd, prod])
    }
  }
  const { cartprd, setCartprd } = useContext(Mycontext)
  const addtoCartprd = (prod) => {
    if(logUser.length>0){
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
  else{
    alert(`Please login to add product in cart`)
  }
  }
  const HandleDisplay = (id) => {
    nav(`/hair/${id}`)
  }
  return (
    <div>
      <div class="topnav" style={{ width: "1489px" }}>
        <div className='logo'><p>H.A.I.R.D.O</p></div>
        <h1 style={{ color: "white", fontFamily: "inherit", width: "200px", marginLeft: "650px" }}>WISHLIST</h1>
        <div style={{ marginLeft: "1000px", marginTop: "-50px" }} >
          <button className='c' onClick={cart}><BsFillCartFill />{cartprd.length > 0 && <span style={{fontSize:"15px",color:"red"}}>{cartprd.length}</span>}</button>
          <button className='home' onClick={home}><FaHome /></button>
        </div>
      </div>
      <div style={{ height: "100px" }}></div>
      {likeprd.length === 0 ? (
        <div>
          <h1>YOUR WISHLIST IS EMPTY!</h1> <br />
          <p> Tap on <FaHeart style={{ color: "red" }} /> to start saving all your favorities</p>
          <img style={{ height: "240px", width: "270px" }} src="https://img.freepik.com/free-vector/heart_53876-25531.jpg?size=626&ext=jpg&ga=GA1.1.217980272.1706538922&semt=sph" alt="" />
        </div>
      ) : (
        <ul>
        </ul>
      )}
      <div className="d1">
        {likeprd.map((dis) =>
          <div className="d3">
            <img width={250} height={250} src={dis.Image} alt="img" onClick={() => HandleDisplay(dis.id)}/>
            <h3>{dis.Name}</h3>
            <h3><i>Rs.</i>{dis.Price}</h3>
            <button className='li' onClick={() => addtolikeprd(dis)}>{
              likeprd.includes(dis) ? <FaHeart style={{ color: "red" }} /> : <FaHeart style={{ color: "black" }} />
            }</button>
            <button className='ca' onClick={() => addtoCartprd(dis)}>{
              cartprd.includes(dis) ? "ALREADY IN CART" : "ADD TO CART"
            }</button>
          </div>
        )
        }
      </div>
      <div style={{ height: "200px" }}></div>
    </div>
  )
}
export default Plike