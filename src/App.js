import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Home from "./Home";
import Products from "./Products";
import Blog from "./Blog";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";

{
  /*import { Switch, Route, Redirect } from "react-router-dom";*/
}
const App = () => {
  return (
    <>
      <Navbar />
      {/*<Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Products" component={Products} />
        <Route exact path="/Blog" component={Blog} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      */}
      <Home />
      <Products />
      <Blog />
      <About />
      <Contact />
    </>
  );
};

export default App;
