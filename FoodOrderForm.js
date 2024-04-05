import React, { useState } from "react";

function FoodOrderForm() {

  function handleSubmit(e) {
    e.preventDefault();
    alert("Order Successful!");
    alert(`Your order was ${order}`);
    alert("Please show your confirmation number for pickup.");
  }
  
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [order, setOrder] = useState("");
  return (
    <div class="formStyles">
    <form onSubmit={handleSubmit}>
    <label htmlFor="name"> Name: </label>
    <input onChange={(e) => setName(e.target.value)} value={name} id="name"
    name="name"
    type="text"/>

    <label htmlFor="phone">Phone: </label>
    <input onChange={(e) => setPhone(e.target.value)} value={phone} id="phone"
    name="phone"
    type="tel"/>

    <label htmlFor="address"> Address: </label>
    <input onChange={(e) => setAddress(e.target.value)} value={address} id="address"
    name="address"
    type="text"/>

    <label htmlFor="order"> Order </label>
    <input onChange={(e) => setOrder(e.target.value)} value={order} id="order"
    name="order"
    type="text"/>
    
    <button type="submit"> Submit Order </button>
    </form>
    </div>
  )
}

export default FoodOrderForm;
