import logo from "./logo.svg";
import "./App.css";
import CarouselContainer from "./components/CarouselContainer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { AboutUs } from "./components/AboutUs";
import { AppNavBar } from "./Common/AppNavBar";
import { UserLogin } from "./components/UserLogin";
import { Registration } from "./components/Registration";

import { OrgUpsert } from "./components/OrgUpsert";
import { Organization } from "./components/Organization";

import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { OrganizationList } from "./components/OrganizationList";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <AppNavBar />
          <Home />
          <div>
            {/* <h1 className="bg-dark text-light p-2 sticky-top d-flex justify-content-center ">
        Welcome to Financial Rating
      </h1> */}

            <CarouselContainer />
          </div>
        </Route>

        <Route path="/about-us">
          <AppNavBar />
          <AboutUs />
        </Route>

        <Route path="/organizationlist">
          <OrganizationList />
        </Route>

        <Route path="/register">
          <Registration />
        </Route>

        <Route path="/login">
          <UserLogin />
        </Route>

        <Route path="/organizationupsert">
          <OrgUpsert />
        </Route>

        <Route path="/organization">
          <Organization />
        </Route>

        <Route path="/">
          <AppNavBar />
          <Home />
          <div>
            {/* <h1 className="bg-dark text-light p-2 sticky-top d-flex justify-content-center ">
        Welcome to Financial Rating
      </h1> */}

            <CarouselContainer />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
