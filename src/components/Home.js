import React from "react";

const Home = (props) => {
  console.log("Home",props)
  return (
    <div>
    <div className="add-to-cart">
    <span className="cart-count">{props.data.length}</span>
<img src="/img/addtocart.jpeg" alt="addtocart"/>    </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
          src="/img/iphone.jpeg"
            alt="phone"
          />
        </div>
        <div className="text-wrapper item">
          <span>I-phone</span>
          <span> Price :$1000</span>
        </div>
        <div className="btn-wrapper item">
          <button onClick={()=>{props.addToCartHandler({price:100,name:"iphone 11"})}}>Add to Cart</button>
          <button className="remove-cart-btn" onClick={()=>{props.removeToCartHandler({price:100,name:"iphone 11"})}}>Remove to Cart</button>

        </div>
      </div>
    </div>
  );
};

export default Home;
