import React, { useContext } from "react";
import ProductContext from "../../context/ProductContext";

const Cart = () => {
  const { cart, setCart } = useContext(ProductContext);

  const parsePrice = (price) => {
    if (typeof price === "string") {
      return parseFloat(price.replace(/[^0-9.]/g, "")) || 0;
    }
    return parseFloat(price) || 0;
  };

  const incrementQty = (product) => {
    const updatedCart = cart.map((item) => {
      if (item.id === product.id && item.quantity > 0) {
        return {
          ...item,
          cartQty: (item.cartQty || 1) + 1,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });

    setCart(updatedCart);
  };

  const decrementQty = (product) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === product.id) {
          const newCartQty = (item.cartQty || 1) - 1;
          if (newCartQty <= 0) return null;
          return {
            ...item,
            cartQty: newCartQty,
            quantity: item.quantity + 1,
          };
        }
        return item;
      })
      .filter(Boolean);

    setCart(updatedCart);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + (item.cartQty || 1),
          };
        }
        return item;
      })
      .filter((item) => item.id !== product.id);

    setCart(updatedCart);
  };

  const subtotal = cart.reduce((acc, item) => {
    const price = parsePrice(item.price);
    const qty = item.cartQty || 1;
    return acc + price * qty;
  }, 0);

  const discount = subtotal * 0.2;
  const delivery = cart.length > 0 ? 15 : 0;
  const total = subtotal - discount + delivery;

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>

      {cart.map((product) => (
        <div
          key={product.id}
          className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4"
        >
          <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-auto object-cover"
            />
          </div>
          <div className="flex-grow">
            <div className="flex justify-between">
              <h3 className="font-medium">{product.name}</h3>
              <span
                className="text-red-500 text-sm cursor-pointer"
                onClick={() => removeFromCart(product)}
              >
                ×
              </span>
            </div>
            {product.size && (
              <p className="text-sm text-gray-500">Size: {product.size}</p>
            )}
            {product.color && (
              <p className="text-sm text-gray-500">Color: {product.color}</p>
            )}
            <div className="flex justify-between items-center mt-2">
              <p className="font-bold">
                ${parsePrice(product.price).toFixed(2)}
              </p>
              <div className="flex items-center space-x-2">
                <button
                  className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
                  onClick={() => decrementQty(product)}
                >
                  −
                </button>
                <span className="text-sm">{product.cartQty || 1}</span>
                <button
                  className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
                  onClick={() => incrementQty(product)}
                  disabled={product.quantity <= 0}
                  title={product.quantity <= 0 ? "Out of stock" : ""}
                >
                  +
                </button>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              In stock: {product.quantity}
            </p>
          </div>
        </div>
      ))}

      <div className="mt-6">
        <h3 className="font-bold text-lg mb-4">Order Summary</h3>
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-red-500">
            <span>Discount (-20%)</span>
            <span>-${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Delivery Fee</span>
            <span className="font-medium">${delivery.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 mb-6">
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="Add promo code"
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
            />
            <span className="absolute left-3 top-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
            </span>
          </div>
          <button className="bg-black text-white rounded-md px-4 py-2 text-sm">
            Apply
          </button>
        </div>

        <a
          href="#"
          className="block bg-black text-white text-center py-3 rounded-md hover:bg-gray-800 transition-colors"
        >
          Go to Checkout
          <span className="inline-block ml-2">→</span>
        </a>
      </div>
    </div>
  );
};

export default Cart;
