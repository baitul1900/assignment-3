import React, { useContext } from "react";
import ProductContext from "../../context/ProductContext";
import Card from "./Card";

const Product = () => {
  const { products, setProducts, cart, setCart } = useContext(ProductContext);

  const handleAddToCart = (selectedProduct) => {
    if (selectedProduct.quantity <= 0) return;

    // Update quantity for products list
    const updatedProducts = products.map((product) =>
      product.id === selectedProduct.id
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );

    setProducts(updatedProducts);

    // Add to cart or increase quantity
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((p) => p.id === selectedProduct.id);

      if (existingIndex > -1) {
        const newCart = [...prevCart];
        const item = newCart[existingIndex];
        newCart[existingIndex] = { ...item, cartQty: (item.cartQty || 1) + 1 };
        return newCart;
      } else {
        return [...prevCart, { ...selectedProduct, cartQty: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (selectedProduct) => {
    // Increase product quantity
    const updatedProducts = products.map((product) =>
      product.id === selectedProduct.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setProducts(updatedProducts);

    // Remove from cart or decrease quantity
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((p) => p.id === selectedProduct.id);

      if (existingIndex > -1) {
        const newCart = [...prevCart];
        const item = newCart[existingIndex];

        if ((item.cartQty || 1) > 1) {
          newCart[existingIndex] = { ...item, cartQty: item.cartQty - 1 };
          return newCart;
        } else {
          // Remove item completely if qty <= 1
          return newCart.filter((p) => p.id !== selectedProduct.id);
        }
      }
      return prevCart;
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {products.map((product) => {
        const inCart = cart.some((item) => item.id === product.id);
        return (
          <Card
            key={product.id}
            product={product}
            inCart={inCart}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
          />
        );
      })}
    </div>
  );
};

export default Product;
