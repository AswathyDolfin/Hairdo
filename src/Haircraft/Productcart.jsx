import { Mycontext } from "../components/Mycontext";
import { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import '../Style/Productcart.css'
function Pcart() {
  const nav = useNavigate()
  function like() {
    nav("/like")
  }
  function home() {
    nav("/")
  }
  const { cartprd, setCartprd, addtoCartprd,likeprd } = useContext(Mycontext)
  console.log("cart product page", cartprd);

  // Function to remove a product from the cart
  const removeFromCart = (prod) => {
    const newCart = [...cartprd];
    newCart.splice(prod, 1);
    setCartprd(newCart);
    alert(`Do you really want to remove`)
  };


  const updateQuantity = (dat, newQuantity) => {
    const updatedCart = cartprd.map(item => {
      if (item.id === dat.id) {
        const updatedItem = { ...item, quantity: newQuantity };
        updatedItem.totalPrice = updatedItem.Price * updatedItem.quantity; // Update the total price
        return updatedItem;
      }
      return item;
    });
    setCartprd(updatedCart);
  };
  useEffect(() => {
    const updatedCart = cartprd.map(item => ({
      ...item,
      totalPrice: item.Price * item.quantity,
    }));
    setCartprd(updatedCart);
  }, [cartprd]);
  const increaseQuantity = (dat) => {
    updateQuantity(dat, dat.quantity + 1);
  };

  const decreaseQuantity = (dat) => {
    if (dat.quantity > 1) {
      updateQuantity(dat, dat.quantity - 1);
    }
  };

  const calculateTotal = () => {
    return cartprd.reduce((total, prod) => total + (prod.Price * prod.quantity), 0);
  };

  return (
    <div>
      <div class="topnav" style={{ width: "1489px" }}>
        <div className='logo'><p>H.A.I.R.D.O</p></div>
        <h1 style={{ color: "white", fontFamily: "inherit", width: "200px", marginLeft: "650px" }}>MY CART</h1>
        <div style={{ marginLeft: "1000px", marginTop: "-50px" }} >
          <button className='c' onClick={like}><FaHeart />{likeprd.length > 0 && <span style={{fontSize:"15px",color:"red"}}>{likeprd.length}</span>}</button>
          <button className='home' onClick={home}><FaHome /></button>
        </div>
      </div>
      <div style={{ height: "90px" }}></div>
      {cartprd.length === 0 ? (
        <div>
          <h1>YOUR CART IS EMPTY!</h1> <br />
          <p> Looks like you haven't added anything to your cart.</p>
          <img style={{ height: "453px", width: "600px" }} src="https://i.pinimg.com/564x/92/8b/b3/928bb331a32654ba76a4fc84386f3851.jpg" alt="" />
        </div>
      ) : (
        <ul>
        </ul>
      )}
      <div className="d11">
        {cartprd.map((dis) =>
          <div className="d33">
            <img width={250} height={250} src={dis.Image} alt="img" />
            <h3>{dis.Name}</h3>
            <h3><i>Rs.</i>{dis.totalPrice}</h3>
            <button className="caa" style={{ width: "200px", boxShadow: "none", borderRadius: "0px" }} onClick={() => removeFromCart(dis)}>REMOVE FROM CART </button><br />
            <button
              style={{ color: "black", border: "2px solid black", background: "none", outline: "none", backgroundColor: "white" }}
              onClick={() => decreaseQuantity(dis)}>-</button>
            {dis.quantity}
            <button
              style={{ color: "black", border: "2px solid black", background: "none", outline: "none", backgroundColor: "white" }}
              onClick={() => increaseQuantity(dis)}>+</button>
          </div>
        )
        }
        <div className="cart-total">
          {
            cartprd > -1 ? "" : <h1>Total Price:₹{calculateTotal()}</h1>
          }
        </div>
      </div>
    </div>
  );
};
export default Pcart