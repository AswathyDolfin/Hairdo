import '../Style/Productdisplay.css'
import { IoMdSearch } from "react-icons/io";
import { BsFillCartFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Mycontext } from "./Mycontext";
import { useContext } from "react";
import { useState } from "react";

function Pdis() {
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
 
  const { prod,logUser } = useContext(Mycontext)
  const {  likeprd, setLikeprd } = useContext(Mycontext)
  const addtolikeprd = (prod) => {
    if (likeprd.includes(prod)) {
      setLikeprd(likeprd.filter((dt) => dt !== prod))
      alert(`"${prod.Name}" is removed from wishlist`)
    } else {
      setLikeprd([...likeprd, prod])
    }
  }
  console.log(likeprd);
  const [filteredProds, setFilteredProds] = useState(prod)
  const [searchQuery, setSearchQuery] = useState("")
  function handleSearch(e) {
    const query = e.target.value
    setSearchQuery(query)
    const filteredResults = prod.filter((product) => {
      const { Name } = product
      return (
        Name.toLowerCase().includes(query.toLowerCase())
      )
    })
    setFilteredProds(filteredResults)
  }

  const { cartprd, setCartprd } = useContext(Mycontext)

  const addtoCartprd = (prod) => {
    if(logUser.length>0){
      
    const existingPdIndex = cartprd.findIndex(item => item.id === prod.id);
    if (existingPdIndex !== -1) {
      // const updatedCartprd = [...cartprd];
      // updatedCartprd[existingPdIndex].quantity++;
      // setCartprd(updatedCartprd);

      alert(`"${prod.Name}" is already in  cart`)
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
  const getFilteredData = (SelectedProd) => {
    const newUser = prod.filter((item) => item.id === SelectedProd)
    return newUser
  }
  const distinctDisplay = [...new Set(prod.map(item => item.id))]

  return (
    <div>
      <div class="top">
        <div className='log'><p>H.A.I.R.D.O</p></div>
        <div className='searchcont' >
          <input className='sear' onChange={handleSearch} type="text" placeholder="Search.."></input>
          <IoMdSearch className='searbtn' />
        </div>
        <div className='topicon'>
          <button className='c' onClick={cart}><BsFillCartFill />{cartprd.length > 0 && <span style={{fontSize:"15px",color:"red"}}>{cartprd.length}</span>}</button>
          <button className='l' onClick={like}><FaHeart />{likeprd.length > 0 && <span style={{fontSize:"15px",color:"red"}}>{likeprd.length}</span>}</button>
          <button className='home' onClick={home}><FaHome /></button>
        </div>
      </div>
      <div style={{ height: "200px" }}></div>
      <div className="d1">
        {filteredProds.map((dis) =>
          <div className="d3">
            <img width={250} height={250} src={dis.Image} alt="img" onClick={() => HandleDisplay(dis.id)} />
            <h3>{dis.Name}</h3>
            <h3><i>Rs.</i>{dis.Price}</h3>
            <div className="lc">
              <button className='li' onClick={() => addtolikeprd(dis)}>{
                likeprd.includes(dis) ? <FaHeart style={{ color: "red" }} /> : <FaHeart style={{ color: "black" }} />
              }</button>
              <button className='ca' onClick={() => addtoCartprd(dis)}>{
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
export default Pdis