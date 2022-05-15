
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import Home from './containers/Home'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;

//<Route path="/product/:productId" component={ProductDetails} />

/* 
<Router>
<Header />
<Routes>
  <Route path="/" exact component={Header} />
  
  <Route>404 Not Found!</Route>
</Routes>
</Router> */