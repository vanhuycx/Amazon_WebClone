import React, { useState } from "react";
import Checkout from "./Checkout";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const stipe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disable, setDisabled] = useState(true);

  const handleSubmit = (e) => {
    //do all the fancy strip stuff
  };

  const handleChange = (e) => {
    //listen for changes in the cardElement
    //and display any errors as the cusomer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(
          <Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery adress</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React St</p>
            <p>Boston, MA</p>
          </div>
        </div>

        {/* Review item */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review item(s) and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((items) => (
              <CheckoutProduct
                id={items.id}
                title={items.title}
                price={items.price}
                image={items.image}
                rating={items.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe magic for payment */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
