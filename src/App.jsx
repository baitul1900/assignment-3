import React, { useState } from "react";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Header from "./Header";
import Product from "./components/product/Product";
import ProductContext from "./context/ProductContext";
import Cart from "./components/cart/Cart";
import getProducts from "./utils/product";

const App = () => {
    const [products, setProducts] = useState(getProducts());
  const [cart, setCart] = useState([]);
  return (
    <>
      <ProductContext.Provider value={{  products, setProducts, cart, setCart }}>
        <Header />
        <div className="container mx-auto px-4 md:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Your Products</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">Sort by:</span>
                  <select className="border rounded-md px-2 py-1 text-sm">
                    <option>Most Popular</option>
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>
              </div>

              <Product />
            </div>

            <div className="lg:col-span-1">
              <Cart/>
            </div>
          </div>
        </div>

        <Newsletter />
        <Footer />
      </ProductContext.Provider>
    </>
  );
};

export default App;
