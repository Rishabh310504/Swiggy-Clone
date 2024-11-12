import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { Routes, Route } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { CartContext } from "./Context";
import Cart from "./components/Cart";

function App() {
  const [cartData, setCartData] = useState([]);

  function getDataFromLocalStorage(){
    let data = JSON.parse(localStorage.getItem("cartData")) || [];
    setCartData(data);
  }

  useEffect(() => {
    getDataFromLocalStorage();
  }, []);

  return (
    <CartContext.Provider value={{cartData, setCartData}}>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Body />}></Route>
        <Route path="/restaurantMenu/:id" element={<RestaurantMenu />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Route>
    </Routes>
    </CartContext.Provider>
  );
}

export default App;
