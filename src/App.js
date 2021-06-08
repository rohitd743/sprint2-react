import logo from "./logo.svg";
import "./App.css";
import CarouselContainer from "./components/CarouselContainer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { AboutUs } from "./components/AboutUs";
import { Project } from "./components/Register";
import { Login } from "./components/Login";
import { AppNavBar } from "./Common/AppNavBar";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

function App() {
  return (
    <Router>
      <AppNavBar />

      <Switch>
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/about-us">
          <AboutUs />
        </Route>

        <Route path="/project">
          <Project />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <div>
        {/* <h1 className="bg-dark text-light p-2 sticky-top d-flex justify-content-center ">
        Welcome to Financial Rating
      </h1> */}

        <CarouselContainer />
      </div>
    </Router>
  );
}

export default App;
