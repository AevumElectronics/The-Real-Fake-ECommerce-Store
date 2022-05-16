
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductPage from "./containers/ProductPage";
import Home from './containers/Home'
import "./App.css";
import CartPage from "./containers/CartPage";

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/product/:productId" element={<ProductPage/>} />
      </Routes>
      
     
      </Router>
    </div>
  );
}

export default App;
///:productCategory
//<Route path="/product/:productId" element={ProductPage} />
//<Route path="/product/:productId" component={ProductDetails} />
// <Home/>
/* 
<Router>
<Header />
<Routes>
  <Route path="/" exact component={Header} />
  
  <Route>404 Not Found!</Route>
</Routes>
</Router> */