import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Chocolate from "./Components/Chocolate";
import Brands from "./Components/Brands";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import BrandDetail from "./Components/BrandDetail";
import ChocolateDetails from "./Components/ChocolateDesc";
import ChocolateDesc from "./Components/ChocolateDesc";
import Search from "./Components/Search";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Switch>
        <Route path="/" exact component={() => <h1 className="has-text-centered" style={{color:'red', marginTop:'150px'}}><i><b>Welcome to choco World</b></i></h1>} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/search" exact component={Search} />
        <Route path="/brands" exact component={Brands} />
        <Route path="/brand/:id" exact component={BrandDetail} />
        <Route path="/chocolate" exact component={Chocolate} />
        <Route path="/chocolates/:id" exact component={ChocolateDesc} />

      </Switch>
      <br />
      <br />
      
      <Footer />
    </>
  );
}
export default App;