import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <>
     <Navbar/> 
     <ProductList/>
     <Newsletter/>
     <Footer/>
    </>
  );
};

export default App;