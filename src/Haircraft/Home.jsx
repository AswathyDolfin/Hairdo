import '../Style/Home.css'
import { BsFillCartFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useState } from 'react';
import { useContext } from 'react';
import { Mycontext } from '../components/Mycontext';
import { Link } from 'react-router-dom';
import { IoLogOutSharp } from "react-icons/io5";
import { GrUserAdmin } from "react-icons/gr";
function Hom() {

  const nav = useNavigate()
  function shopnow() {
    nav("/pdis")
  }

  function cart() {
    nav("/cart")
  }
  function like() {
    nav("/like")
  }
  function login() {
    nav("/log")
  }
  function adm() {
    nav("/adlgn")
  }
  const { prod, logUser, setLogUser, cartprd, likeprd,setLikeprd,setCartprd } = useContext(Mycontext)

  const [selectCat, setSelectCat] = useState("")

  const [filteredProds, setFilteredProds] = useState(prod)

  const [searchQuery, setSearchQuery] = useState("")
  console.log("logUser", logUser);

  const handleCat = (e) => {
    const selectedCat = e.target.value
    // if (selectedCat !== selectCat) {
    setSelectCat(selectedCat)
    nav(`/cat/${selectedCat}`)
    // }
  }

  const getFilteredPds = (selectCat) => {
    const newProds = prod.filter((item) => item.Haircare === selectCat)
    return newProds
  }
  const distinctCategory = [...new Set(prod.map(item => item.Haircare))]

  const getFilteredProds = (selectCat) => {
    const newProds = prod.filter((item) => item.Hairtools === selectCat)
    return newProds
  }
  const distinctCategor = [...new Set(prod.map(item => item.Hairtools))]

  const getFilteredProd = (selectCat) => {
    const newProds = prod.filter((item) => item.Hairtcolor == selectCat)
    return newProds
  }
  const distinctCatego = [...new Set(prod.map(item => item.Haircolor))]

  function logoutBtn() {
    // window.location.reload();
    setLogUser("")
    setLikeprd([])
    setCartprd([])
    // setuser("")
  }

  return (
    <div>
      <div class="topnav">
        <div className='logo'><p>H.A.I.R.D.O</p></div>
        <div className='topnavcat'>
          <select className='cat1' name="" id="" onChange={handleCat} >
            <option value="">HAIR CARE</option>
            {distinctCategory.map((Haircare) =>
              <option value={Haircare}>{Haircare}</option>
            )}
          </select >
          <select className='cat1' name="" id="" onChange={handleCat}>
            <option value="">HAIR TOOLS</option>
            {distinctCategor.filter(Hairtools => Hairtools && Hairtools.trim() !== "")
              .map((Hairtools) =>
                <option value={Hairtools}>{Hairtools}</option>
              )}
          </select>
          <select className='cat1' name="" id="" onChange={handleCat}>
            <option value="">HAIR COLOR</option>
            {distinctCatego.filter(Haircolor => Haircolor && Haircolor.trim() !== "")
              .map((Haircolor) =>
                <option value={Haircolor}>{Haircolor}</option>
              )}
          </select>
        </div>
        <div className='topnavicon'>
          <button className='c' onClick={cart}><BsFillCartFill />{cartprd.length > 0 && <span style={{ fontSize: "15px", color: "red" }}>{cartprd.length}</span>}</button>
          <button className='l' onClick={like}><FaHeart />{likeprd.length > 0 && <span style={{ fontSize: "15px", color: "red" }}>{likeprd.length}</span>}</button>
          <button className='logi'>
            {logUser && logUser.length > 0 ? (
              <Link to={'/'} onClick={logoutBtn}><b> <IoLogOutSharp /></b></Link>
            ) : (
              <Link to={'/log'}><b><FaUser /></b></Link>
            )}
          </button>
          <button className='c' onClick={adm}><GrUserAdmin /></button>
        </div>
      </div>
      <div className="display">
        <img className="dis2" src="https://pluggedproduction.com/wp-content/uploads/2020/02/HAIR_CARE_EDITORIAL_advertising_print_PLUGGED_PRODUCTION_1685-scaled.jpg" alt="img" />
        <div className="dis1">Love Your Hair,<br /> Love Yourself <br />
          <button className='btn1 ' onClick={shopnow}>SHOP NOW</button> </div>
      </div>
      <div style={{ height: "50px", backgroundColorcolor: "black" }}></div>
      <div className='text'>
        <div className='tex1'><p>Salon-Like Gorgeous Hair At Home</p></div>
        <div className='tex2'> <p>With HAIRDO products, you get a salon-like experience & shiny hair at <br />
          home. Crafted with expertise, we will leave you spoilt for choice with our <br />
          range of hair colours, shampoos, conditioners, and hair styling products <br />
          for unmatched salon-like results at home.</p></div>
      </div>
      <div className='bar1'>
        <div className='fp'><p>“Your hair says a lot about you.”</p></div>
        <div>
        </div>
        <div className='imagecat'>
          <div className='container'>
            <img className='img' src="https://i.pinimg.com/736x/d5/b4/52/d5b45211d6eead1e5f16501d6a650358.jpg" alt="img" />
            <div className='content'>
              <h2>CURLY</h2>
              <Link to={'/c'} ><button className='btn2'>SHOP NOW</button></Link>
            </div></div>
          <div className='container'>
            <img className='img' src="https://i.pinimg.com/236x/0e/d6/2d/0ed62d939db97b8ca571f03325f7b0cc.jpg" alt="img" />
            <div className='content'>
              <h2>WAVY</h2>
              <Link to={'/w'} ><button className='btn2'>SHOP NOW</button></Link>
            </div></div>
          <div className='container'>
            <img className='img' src="https://i.pinimg.com/236x/ed/ec/4c/edec4cd0aafbaa35d0cff4d0359df321.jpg" alt="img" />
            <div className='content'>
              <h2>STRAIGHT</h2>
              <Link to={'/s'} ><button className='btn2'>SHOP NOW</button></Link>
            </div></div>
        </div>
      </div>
      <div className='lastimg' >
        <img className='last' src="https://i.pinimg.com/736x/5f/22/1a/5f221a36d3f7dd9b917b2cf73ad2b420.jpg" alt="img" />
        <div className='he'>"YOUR <br />BEST <br /> HAIR <br />EVER"</div>
      </div>
      <div style={{ height: "50px" }}></div>
      <div className='bottomnav' >
        <div>
          <div className='para'>
            <div>
              <p>ABOUT US</p>
              <p>Our Story <br />Our Blog</p>
            </div>
            <div >
              <p>CUSTOMER SERVICE</p>
              <p>Contact Us <br />Delivery <br />Returns <br />Track Order <br />Privacy Policy</p>
            </div>
            <div >
              <p>OUR CATEGORY</p>
              <p> Hair Care <br />Hair Tools  <br />Hair Color</p>
            </div> </div> </div>
        <div className='bn1'>
          <div className='logo1'><p>H.A.I.R.D.O <br />
            <i style={{ fontSize: "20px" }}>Follow Us <br /><FaFacebook /><FaTwitter /><FaInstagramSquare /><FaYoutube /></i></p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Hom