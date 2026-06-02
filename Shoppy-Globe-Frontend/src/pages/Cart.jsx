import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartItem = lazy(() => import('../components/CartItem'))

const Cart = () => {
  const collection = useSelector((state) => state.cart.items);

  const totalPrice = collection.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
    0
  );

  if (collection.length === 0) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4">
        <h2 className="text-xl font-semibold">Your cart is empty 🛒</h2>

        <Link
          to="/"
          className="px-4 py-2 bg-black text-white rounded-full hover:opacity-80"
        >
          Go to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>

      {/* Cart Items */}
      <div className="flex flex-col gap-4">
        {collection.map((item) => (
          <Suspense fallback={<h1>Loading Carousel...</h1>}>
          <CartItem key={item.id} data={item} />
          </Suspense>
        ))}
      </div>

      {/* Total Section */}
      <div className="mt-6 p-4 flex flex-col gap-4 justify-center shadow-xl rounded-xl bg-gray-100">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Total</h2>

          <h2 className="text-xl font-bold">
            ₹ {Math.round(totalPrice)}
          </h2>
        </div>

        <button className="bg-gray-400 text-center m-auto p-2 rounded-3xl w-fit active:scale-90">
          CheckOut
        </button>
      </div>
    </div>
  );
};

export default Cart;