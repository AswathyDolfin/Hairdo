import './App.css';
// import Factorial from './components/Factorial';
// import Useeffect from './components/Useeffect';
// import Fetch from './components/Fetch';
// import Netflix from './components/Netflix';
// import Show from './components/Show';
// import Watch from './components/Watchlist';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Mycontext } from './Haircraft/Mycontext';
// import { Symbols } from './components/Data';
import { useState } from 'react';
// import Display from './components/Datadisplay';
import Cata from './Haircraft/Category';
import Hom from './Haircraft/Home';
import Pdis from './Haircraft/Productdisplay';
import Pcart from './Haircraft/Productcart';
import Plike from './Haircraft/Productlike';
import { Project } from './Haircraft/Productdata';
import Plogin from './Haircraft/Productlogin';
import Preg from './Haircraft/Productregister';
import Wavy from './Haircraft/Wavy';
import Straight from './Haircraft/Straight';
import Curly from './Haircraft/Curly';
import AdminPage from './Haircraft/Productadmin';
import Hairdisplay from './Haircraft/Hair';
import HairDetails from './Haircraft/HairDetails';
import AdminLoginPage from './Haircraft/Productadmlogin';
function App() {
  // const StringData="HAVE FUN"
  // const objData={
  //   "director":"Mike Newell",
  //   "theme":"Fantasy"
  // }
  // const[symbols,setsymbol]= useState(Symbols)
  // const [likeproducts, setLikeproducts] = useState([])
  // const[prod,setprod]=useState(Asymbols)
  // const [cartproducts,setCartproducts] =useState([])
  // const [user,setUser]=useState([])
  // const[loguser,setLogUser]=useState([])

  const[project,setproject]=useState(Project)
  const[puser,setPuser]=useState([])
  const[likeprd,setLikeprd] =useState([])
  const[cartprd,setCartprd] =useState([])
  const[prod,setProd] =useState(Project)
  const[items,setItems] =useState([])
  const[logUser,setLogUser] =useState([])
  const values = {
    project,
    puser,
    setPuser,
    likeprd,
    setLikeprd,
    cartprd,
    setCartprd,
    prod,
    setProd,
    items,
    setItems,
    logUser,
    setLogUser
    // likeproducts,
    // setLikeproducts,
    // setprod,
    // prod,
    // cartproducts,
    // setCartproducts,
    // user,
    // loguser,
    // setLogUser,
    // setUser
  }
  // const dataArray=[{"Movie":"Harrypotter",},{"Movie":"Titanic"},{"Movie":"Oppenheimer"}]

  return (
    <div className="App">
      {/* <Useeffect/> 
       <Fetch/> 
      <Factorial/> */}
      {/* <ToDo/> */}
      <BrowserRouter>
        <Mycontext.Provider value={values}>
          <Routes>
            {/* <Route path='/' element={<Netflix  data={StringData} />}/>
    <Route path='/show' element={<Show dataobj={objData} />}/>
    <Route path='/watchlist' element={<Watch dataar={dataArray}/>}/> */}
            {/*<Route path='/data' element={<Display/>}/> */}
             {/* <Route path='/data2' element={<Dis />} />
            <Route path='/like' element={<Like />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/reg' element={<Reg/>}/>
            <Route path='/login' element={<Login/>}/>*/}
            <Route path='/cat/:selectedCat' element={<Cata/>}/> 
            <Route path='/c' element={<Curly/>}/> 
            <Route path='/s' element={<Straight/>}/> 
            <Route path='/' element={<Hom/>}/>
            <Route path='/pdis' element={<Pdis/>}/>
            <Route path='/w' element={<Wavy/>}/> 
            <Route path='/cart' element={<Pcart/>}/>
            <Route path='/like' element={<Plike/>}/>
            <Route path='/log' element={<Plogin/>}/>
            <Route path='/reg' element={<Preg/>}/>
            <Route path='/adm' element={<AdminPage/>}/>
            <Route path='/adlgn' element={<AdminLoginPage/>}/> 
            <Route path='/hair/:id' element={<HairDetails/>}/>

            
          </Routes>
        </Mycontext.Provider>
      </BrowserRouter>


    </div>
  );
}

export default App;
