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
import "./App.css";
import Products from "./components/products";
import ContactForm from "./components/contactform";
import Services from "./components/services";
import About from "./components/about";
import Footer from "./components/footer";
import React, { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   $(".owl-carousel").OwlCarousel({
  //     loop: true,
  //     margin: 10,
  //     nav: true,
  //     autoplay: true,
  //     autoplayTimeout: 3000,
  //     autoplayHoverPause: true,
  //     center: true,
  //     // navText: [
  //     //   "<i class='fa fa-angle-left'></i>",
  //     //   "<i class='fa fa-angle-right'></i>",
  //     // ],
  //     responsive: {
  //       0: {
  //         items: 1,
  //       },
  //       600: {
  //         items: 1,
  //       },
  //       1000: {
  //         items: 3,
  //       },
  //     },
  //   });
  // });
  return (
    <React.Fragment>
      <div className="container-fluid">
        <Navbar />
        {/* <DisplayJobs /> */}
        <div>
          <Switch>
            <Route path="/products" component={Products} />
            <Route path="/aboutd" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/contactform" component={ContactForm} />
            <Route path="/registerForm" component={RegisterForm} />
            <Route path="/loginForm" component={LoginForm} />
            <Route path="/displayJobs/:id" component={JobForm} />
            <Route path="/customers" component={Cusomters} />
            <Route path="/contract" component={Contract} />
            <Route path="/displayJobs" component={DisplayJobs} />
            <Route path="/notFound" component={NotFound} />
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
