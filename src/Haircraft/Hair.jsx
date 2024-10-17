import { Mycontext } from "./Mycontext"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import { BsFillCartFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
function Hairdisplay() {
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

  const { prod } = useContext(Mycontext)
  const { SelectedProd } = useParams()
  const product = prod.filter((prod) => prod.id === SelectedProd)
  console.log('SelectedProd', product);
  const { cartprd, setCartprd } = useContext(Mycontext)

  const addtoCartprd = (prod) => {
    const existingPdIndex = cartprd.findIndex(item => item.id === prod.id);
    if (existingPdIndex !== -1) {

      alert(`"${prod.Name}" is already added to the cart`)
    } else {
      setCartprd([...cartprd, { ...prod, quantity: 1 }]);
    }
  }

  const { project, likeprd, setLikeprd } = useContext(Mycontext)
  const addtolikeprd = (prod) => {
    if (likeprd.includes(prod)) {
      setLikeprd(likeprd.filter((dt) => dt !== prod))
    } else {
      setLikeprd([...likeprd, prod])
    }
  }
  return (
    <div>
      <div class="tops">
        <div className='logs'><p>H.A.I.R.D.O</p></div>
        <div className='topicons'>
          <button className='cs' onClick={cart}><BsFillCartFill /></button>
          <button className='ls' onClick={like}><FaHeart /></button>
          <button className='homes' onClick={home}><FaHome /></button>
        </div>
      </div>
      <div style={{ height: "200px" }}></div>
      <div className="d1s">
        {product.map((dis) =>
          <div className="d3s">
            <img width={250} height={250} src={dis.Image} alt="img" />
            <h3>{dis.Name}</h3>
            <div className="lcs">
              <button className='lis' onClick={() => addtolikeprd(dis)}>{
                likeprd.includes(dis) ? <FaHeart style={{ color: "red" }} /> : <FaHeart style={{ color: "black" }} />
              }</button>
              <button className='cas' onClick={() => addtoCartprd(dis)}>{
                cartprd.includes(dis) ? "ALREADY IN CART" : "ADD TO CART"
              }</button>
            </div>
          </div>
        )
        }
      </div>
      <div style={{ height: "200px" }}></div>
    </div>
  )
}
export default Hairdisplay