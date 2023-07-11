import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

const [totalPrice, setTotalPrice] = useState(0);
const [totalItems, setTotalItems] = useState(0);
const [product1, setProduct1] = useState(150);
const [product2, setProduct2] = useState(800);
const [product3, setProduct3] = useState(300);

  return (
    
    <div className="App">
<div className='display-information'>
  <h3>amount product in cart { totalItems} $
  </h3>
  <h3>All total price of product { totalPrice} $
  </h3>
</div>
        <div className='product'>
        <img src='./apple.jpg' alt='watch' style={{width:250,height:250,}}></img>
          <p>Price of watch is {product3}</p>
          <button style={{marginRight:5}} onClick={() => 
            {setTotalItems(totalItems + 1);
            setTotalPrice(totalPrice + product3)}}>Add to cart</button>

          <button onClick={() => {if(totalItems > 0)
          {setTotalItems(totalItems - 1);
           setTotalPrice(totalPrice - product3)}}}>Remove</button>
        </div>
        <div className='product'>
        <img src='./glassess.jpg' alt='glases' style={{width:250,height:250,}} ></img>
          <p>Price of glases is {product1}</p>
          <button style={{marginRight:5}} onClick={() => {setTotalItems(totalItems + 1); setTotalPrice(totalPrice + product1)}} >Add to cart</button>
          <button onClick={() => {if(totalItems > 0)
          {setTotalItems(totalItems - 1); setTotalPrice(totalPrice - product1)}}}>Remove</button>
        </div>
        <div className='product'>
        <img src='./shose.jpg' alt='shose' style={{width:250,height:250,}}></img>
          <p>Price of Nike shose is {product2}</p>
          <button style={{marginRight:5}} onClick={() =>
             {setTotalItems(totalItems + 1);
              setTotalPrice(totalPrice + product2)}}>Add</button>
              
          <button onClick={() => {if(totalItems > 0)
          {setTotalItems(totalItems - 1); setTotalPrice(totalPrice - product2)}}}>Remove</button>
        </div>
        
 

    </div>
  );
}

export default App;
