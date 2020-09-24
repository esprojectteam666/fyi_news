import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layouts/Navbar";
import SecondNav from "./components/layouts/SecondNav";
import Footer from "./components/layouts/Footer";
import { Switch, Route } from "react-router-dom";

import News from "./components/pages/Newspage/News";
import Tickets from "./components/pages/TicketsPage/Tickets";
import Contacts from "./components/pages/Contacts";
import NotFoundPage from "./components/pages/NotFoundPage";

import Signin from "./components/pages/Auth/SignIn";
import Login from "./components/pages/Auth/Login";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SecondNav />

        <Switch>
          <Route exact path="/" component={News} />
          <Route path="/news" component={News} />
          <Route path="/tickets" component={Tickets} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/NotFoundPage" component={NotFoundPage} />
          <Route path="/Login" component={Login} />
          <Route path="/SignIn" component={Signin} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
