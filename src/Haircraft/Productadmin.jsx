import React, { useContext } from 'react'
import { Mycontext } from './Mycontext';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import '../Style/Productadmin.css'
import { SlArrowRightCircle } from "react-icons/sl";
const AdminPage = () => {
  
  const nav = useNavigate()
  function home() {
    nav("/")
  }
  function dis() {
    nav("/pdis")
  }
  
  const { prod, setProd, setPuser, setLogUser } = useContext(Mycontext);
  
  const [selectedCategory, setSelectedCategory] = useState('');

  const initialProduct = {
    id: '',
    Name: '',
    Price: '',
    Abt: '',
    Haircare: '',
    Haircolor: '',
    Hairtools: '',
    Image: '',
    Type: '',
    quantity: 1,
  };

  const [currentProduct, setCurrentProduct] = useState(initialProduct);
const addProduct = () => {
    setProd([...prod, currentProduct]);
    setCurrentProduct(initialProduct);
  };

  const removeProduct = (productId) => {
    setProd(prod.filter((product) => product.id !== productId));
  };

  const editProduct = (productId) => {
    const productToEdit = prod.find((product) => product.id === productId);
    setCurrentProduct(productToEdit || initialProduct);
  };

  const updateProduct = () => {
    const updatedProducts = prod.map((product) =>
      product.id === currentProduct.id ? currentProduct : product
    );
    setProd(updatedProducts);
    setCurrentProduct(initialProduct);
  };
  
  const Type = ['wavy', 'straight', 'curly'];
  const { logUser, puser } = useContext(Mycontext);
  console.log('logUser', logUser);

  const handleBanUser = (index) => {
    const updatedUsers = [...puser];
    const updatedLogUsers = [...logUser];


    updatedUsers[index].banned = true;

    // Find the banned user in the logUser array and remove them
    const bannedUser = updatedLogUsers.find((user) => user.email === updatedUsers[index].email);
    const bannedUserIndex = updatedLogUsers.indexOf(bannedUser);
    if (bannedUserIndex !== -1) {
      updatedLogUsers.splice(bannedUserIndex, 1);
    }

    // Update the state with the modified user and logUser arrays
    setPuser(updatedUsers);
    setLogUser(updatedLogUsers);
  };
  return (
    <div>
      <div className="topnav" style={{ width: "1489px" }}>
        <div className='logo'><p>H.A.I.R.D.O</p></div>
        <h1 style={{ color: "white", fontFamily: "inherit", width: "200px", marginLeft: "650px" }}>ADMIN</h1>
        <div style={{ marginLeft: "1000px", marginTop: "-50px" }} >
          <button className='home' onClick={home}><FaHome /></button>
          <button className='home' onClick={dis}><SlArrowRightCircle /></button>
        </div>
      </div>
      <div>
        <div style={{ height: "110px" }}></div>
        <div className="Prodd">
          <h2>LOGGED USERS </h2>
          {logUser.length > 0 && (
            <div>
              <h3>User Details:</h3>
              {logUser.map((LoggedUser, index) => (
                <div key={index}>
                  {/* <h4>ID: {index + 1}</h4> */}
                  <h4>Name: {LoggedUser.name}</h4>
                  <h4>Email: {LoggedUser.email}</h4>


                </div>
              ))}
            </div>)}

        </div>
        <div style={{ height: "10px" }}></div>
        <div className="Prodd">
          <h2>REGISTERED USERS</h2>
          {puser.length > 0 && (
            <div>
              <h3>User Details:</h3>
              {puser.map((LoggUser, index) => (
                <div key={index}>

                  <p>Name: {LoggUser.name}</p>
                  <p>Email: {LoggUser.email}</p>

                  {LoggUser.banned ? (
                    <p>User is banned</p>
                  ) : (
                    <button onClick={() => handleBanUser(index)}>Ban the user</button>
                  )}
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
      <div style={{ height: "10px" }}></div>
      <div className='Prod'>
        <h2><b>ADD/EDIT PRODUCT</b></h2>
        <div className='add' >
          <b>Id:</b>
          <input className='type' type="text" value={currentProduct.id} onChange={(e) => setCurrentProduct({ ...currentProduct, id: e.target.value })} />
          <b>Name :</b>
          <input className='type' type="text" value={currentProduct.Name} onChange={(e) => setCurrentProduct({ ...currentProduct, Name: e.target.value })} />
          <div style={{ height: "5px" }}></div>
          <br /> <b> Price:</b>
          <input className='type' type="text" value={currentProduct.Price} onChange={(e) => setCurrentProduct({ ...currentProduct, Price: e.target.value })} />
          <b>Type:</b>
          <input className='type' type="text" value={currentProduct.Type} onChange={(e) => setCurrentProduct({ ...currentProduct, Type: e.target.value })} />
          <div style={{ height: "5px" }}></div>
          <br /><b>Haircare:</b>
          <input className='type' type="text" value={currentProduct.Haircare} onChange={(e) => setCurrentProduct({ ...currentProduct, Haircare: e.target.value })} />
          <b>Haircolor:</b>
          <input className='type' type="text" value={currentProduct.Haircolor} onChange={(e) => setCurrentProduct({ ...currentProduct, Haircolor: e.target.value })} />
          <div style={{ height: "5px" }}></div>
          <br /> <b>Hairtools:</b>
          <input className='type' type="text" value={currentProduct.Hairtools} onChange={(e) => setCurrentProduct({ ...currentProduct, Hairtools: e.target.value })} />
          <div style={{ height: "5px" }}></div>
          <br /><b>Image:</b>
          <input className='type' type='text' placeholder='Image URL' value={currentProduct.Image} onChange={(e) => setCurrentProduct({ ...currentProduct, Image: e.target.value })} />

        </div>
        <div style={{ height: "10px" }}></div>
        {/* {!currentProduct.id ? ( */}
        <button onClick={updateProduct}>Update Product</button>
        {/* ) : ( */}
        <button className='AdminAdd' onClick={addProduct}>Add Product</button>
        {/* )} */}
      </div>
      <div>
        <h2>PRODUCT LIST</h2>
        < div className='list'>
          {prod.map((product) => (
            <div style={{ boxShadow: " 6px 8px 10px 0 rgba(0, 0, 0, 0.2)", width: "300px" }}>
              <h3>id: {product.id}</h3>
              <h3> {product.Name} </h3>
              <img width={250} height={250} src={product.Image} alt="image" />
              <h3 >About the prodcut:</h3><p style={{ width: "250px" }}>{product.Abt} </p>
              <h3>{product.Type}</h3>
              <h4>${product.Price}</h4>
              <h3>{product.Haircare}</h3>
              <h3>{product.Haircolor}</h3>
              <h3>{product.Hairtool}</h3>
              <button className='Admin' onClick={() => editProduct(product.id)}>Edit</button>
              <button className='Admin' onClick={() => removeProduct(product.id)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

