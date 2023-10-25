import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { Row } from "react-bootstrap";
const Carte = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  // const [amount, setAmount] = useState(1);

  const handlePrice = () => {
    let ans = 0;
    cart.map((data) => (ans += data.amount * data.ticketPrice));
    setPrice(ans);
  };
  const handleRemove = (id) => {
    const arr = cart.filter((data) => data.id !== id);
    setCart(arr);
    handlePrice();
  };
  useEffect(() => {
    handlePrice();
  });
  return (
    <Row>
      <Card>
        <article>
          {cart.map((data) => (
            <div className="card_box" key={data.id}>
              <div className="cart_img">
                <img src={data.image} alt="" height={"200px"} />
                <p className="tit">{data.title}</p>
              </div>
              <div>
                <button className="sub" onClick={() => handleChange(data, -1)}>
                  -
                </button>
                <button className="amount">{data.amount}</button>
                <button className="add" onClick={() => handleChange(data, +1)}>
                  +
                </button>

                <span className="tick">{data.ticketPrice}</span>
                <button
                  className="remove"
                  onClick={() => handleRemove(data.id)}
                >
                  remove
                </button>
              </div>
            </div>
          ))}
          <div>
            <span className="total">
              total price of your cart
              <span className="rs">Rs-{price}</span>
            </span>
          </div>
        </article>
      </Card>
    </Row>
  );
};

export default Carte;
