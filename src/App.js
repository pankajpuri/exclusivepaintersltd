import logo from "./logo.svg";
import "./App.css";
import DisplayJobs from "./components/displayJobs";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { React } from "react";
import Cusomters from "./components/customers";
import Contract from "./components/contract";
import Navbar from "./components/Navbar";
import NotFound from "./components/notFound";
import JobForm from "./components/jobForm";

function App() {
  return (
    <div>
      <Navbar />
      {/* <DisplayJobs /> */}
      <div className="content">
        <Switch>
          <Route path="/displayJobs/:id" component={JobForm} />
          <Route path="/customers" component={Cusomters} />
          <Route path="/contract" component={Contract} />
          <Route path="/notFound" component={NotFound} />
          <Route path="/displayJobs" component={DisplayJobs} />
          <Redirect from="/" to="/displayJobs" />

          <Redirect to="/notFound" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
