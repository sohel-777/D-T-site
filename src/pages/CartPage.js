import React, { useState, useEffect } from "react";
import Footer from '../components/Footer/Footer'

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleDecreaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity -= 1;
    if (updatedCartItems[index].quantity === 0) {
      updatedCartItems.splice(index, 1); // Remove item if quantity becomes zero
    }
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <>
    
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="grid grid-cols-1 gap-4">
        {cartItems.map((item, index) => (
          <div key={index} className="border p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <img className="h-24 w-24 object-cover" src={item.images[0]} alt="" />
            <div>
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600">Price: Rs. {item.price}</p>
              <p className="text-gray-600">Color: {item.color}</p>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
            </div>
            </div>
            <div className="flex items-center">
              <button
                className="border border-gray-300 px-2 py-1 mr-2"
                onClick={() => handleDecreaseQuantity(index)}
              >
                -1
              </button>
              <button className="border border-gray-300 px-2 py-1">+1</button>
            </div>
          </div>
        ))}
      </div>
    </div>
<button className="w-screen bg-cyan-800 p-2 text-center font-bold text-4xl hover:bg-white hover:border-2 border-cyan-800">Checkout</button>
    <Footer/>
    </>
  )
}

export default CartPage
