import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./component/home";
import { Contact } from "./component/contact";
import Movie from "./component/movie";
import NavBar from "./component/navbar/navbar";
import { Detail } from "./detail";
import "./App.css";
import Carte from "./component/carte";

import Google from "./google";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const handleClick = (data) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (data.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, data]);
  };

  const handleChange = (data, d) => {
    const ind = cart.findIndex((item) => item.id === data.id);

    if (ind !== -1) {
      const updatedCart = [...cart];
      updatedCart[ind].amount += d;
      if (updatedCart[ind].amount === 0) {
        updatedCart.splice(ind, 1);
      }
      setCart(updatedCart);
    }
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Google />} />

        <Route path="/navbar" element={<NavBar size={cart.length} />} />
        {warning && (
          <div className="warning">item is already added to your cart</div>
        )}
        <Route path="/home" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<Contact />} /> */}
        <Route
          path="/movie/:id"
          element={<Detail handleClick={handleClick} />}
        />
        <Route
          path="/carte"
          element={
            <Carte cart={cart} setCart={setCart} handleChange={handleChange} />
          }
        />
      </Routes>
    </>
  );
};

export default App;
