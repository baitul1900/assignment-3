import React from "react";

const Card = ({ product, inCart, onAddToCart, onRemoveFromCart }) => {
  return (
    <div
      className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300"
    >
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{product.name}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center my-1">
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }, (_, index) => (
                <span
                  key={index}
                  className={index < product.rating ? "" : "text-gray-300"}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">
              {product.rating}/5
            </span>
          </div>
          <span className="text-xs text-gray-700">
            ({product.quantity} pcs left)
          </span>
        </div>
        <p className="font-bold">{product.price}</p>
        {inCart ? (
          <button
            className="w-full mt-2 bg-red-600 py-1 text-white rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-red-700"
            onClick={() => onRemoveFromCart(product)}
          >
            Remove from Cart
          </button>
        ) : (
          <button
            className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900"
            disabled={product.quantity <= 0}
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
