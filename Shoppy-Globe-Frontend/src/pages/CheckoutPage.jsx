import React, { useState } from "react";
import { clearCart } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const CheckoutPage = () => {
  // for page navigation
  const navigate = useNavigate();

  // for redux actions
  const dispatch = useDispatch();

  // storing user details from checkout form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  // update form data when user type
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // place order and clear cart
  const handlePlaceOrder = (e) => {
    e.preventDefault();

    alert("Order placed");

    // Clear cart
    dispatch(clearCart());

    // Redirect to Home page
    navigate("/");
  };

  return (
    <div className="min-h-screen px-6 gap-6 flex flex-col justify-center items-center">
      {/* checkout heading */}
      <h1 className="text-3xl font-bold">Checkout</h1>

      {/* user details form */}
      <form
        onSubmit={handlePlaceOrder}
        className="flex flex-col gap-6 w-full md:w-80%] lg:w-[60%]"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="border p-2"
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="border p-2"
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="border p-2"
          required
        />

        {/* submit order button */}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
