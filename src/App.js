import DisplayJobs from "./components/displayJobs";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "font-awesome/css/font-awesome.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Cusomters from "./components/customers";
import Contract from "./components/contract";
import Navbar from "./components/Navbar";
import NotFound from "./components/notFound";
import JobForm from "./components/jobForm";
import LoginForm from "./components/common/loginForm";
import RegisterForm from "./components/common/registerForm";
import Home from "./components/home";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Products from "./components/products";
import ContactForm from "./components/contactform";
import Services from "./components/services";
import About from "./components/about";
import Footer from "./components/footer";
import React from "react";

import "react-toastify/dist/ReactToastify.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
function App() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <ToastContainer />
        <Navbar />
        {/* <DisplayJobs /> */}
        <div>
          <Switch>
            <Route path="/products" component={Products} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/contactform" component={ContactForm} />
            <Route path="/registerForm" component={RegisterForm} />
            <Route path="/loginForm" component={LoginForm} />
            <Route path="/displayJobs/:id" component={JobForm} />
            <Route path="/customers" component={Cusomters} />
            <Route path="/contract" component={Contract} />
            <Route path="/displayJobs" component={DisplayJobs} />
            <Route path="/notFound" component={NotFound} />
            <Route path="/exclusivepaintersltd" component={Home} />
            <Route path="/home" component={Home} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/notFound" />
          </Switch>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
