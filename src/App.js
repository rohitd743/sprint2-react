import logo from "./logo.svg";
import "./App.css";
import CarouselContainer from "./components/CarouselContainer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { AboutUs } from "./components/AboutUs";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { AppNavBar } from "./Common/AppNavBar";
import { UserLogin } from "./components/UserLogin";
import { Registration } from "./components/Registration";

import { EmployeeUpsert } from "./components/EmployeeUpsert";
import { EmployeeList } from "./components/EmployeeList";

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
          <div>
            {/* <h1 className="bg-dark text-light p-2 sticky-top d-flex justify-content-center ">
        Welcome to Financial Rating
      </h1> */}

            <CarouselContainer />
          </div>
        </Route>

        <Route path="/about-us">
          <AboutUs />
        </Route>

        <Route path="/register">
          <Registration />
        </Route>

        <Route path="/login">
          <UserLogin />
        </Route>

        <Route path="/employeeupsert">
          <EmployeeUpsert />
        </Route>
        <Route path="/employeelist">
          <EmployeeList />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
