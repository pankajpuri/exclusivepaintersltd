import DisplayJobs from "./components/displayJobs";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "font-awesome/css/font-awesome.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { React } from "react";
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
function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      {/* <DisplayJobs /> */}
      <div>
        <Switch>
          <Route path="/products" component={Products} />
          <Route path="/contactform" component={ContactForm} />
          <Route path="/registerForm" component={RegisterForm} />
          <Route path="/loginForm" component={LoginForm} />
          <Route path="/displayJobs/:id" component={JobForm} />
          <Route path="/customers" component={Cusomters} />
          <Route path="/contract" component={Contract} />
          <Route path="/notFound" component={NotFound} />
          <Route path="/displayJobs" component={DisplayJobs} />
          <Route path="/home" component={Home} />
          <Redirect from="/" exact to="/home" />

          <Redirect to="/notFound" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
