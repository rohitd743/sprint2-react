import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { AppNavBar } from "../Common/AppNavBar";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { UserRegisterAction } from "../redux/UserRegisterReducer";
import { useRef, useState } from "react";
import { UserRegNavBar } from "../Common/AppNavBar";
export function Registration() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const formEL = useRef();

  const [successOperation, setSuccessOperation] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const updateName = (e) => setName(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  const updateUserEmail = (e) => setUserEmail(e.target.value);
  const updateMobile = (e) => setMobile(e.target.value);

  const RegisterUser = (e) => {
    e.preventDefault();

    if (formEL.current.checkValidity() === false) {
      // hanlde the false case
      e.preventDefault();
      e.stopPropagation();
      formEL.current.classList.add("was-validated");
    } else {
      dispatch(
        UserRegisterAction({
          mobile,
          name,
          userEmail,
          password,
        })
      );

      //success alert
      setSuccessOperation(true);
      setTimeout(() => setSuccessOperation(false), 5000);

      // reset the form
      setName("");
      setPassword("");
      setUserEmail("");
      setMobile("");
    }
  };

  // THIS IS REDUX ACTION CALLING

  return (
    <div className="bg-info" style={{ height: "100vh" }}>
      <UserRegNavBar></UserRegNavBar>

      <div className="row ">
        <div className="col-3 col-md-3 d-none d-md-block"></div>
        <div className="col-12 col-md-6">
          <h3 className="alert alert-secondary mt-2 d-flex justify-content-center">
            Register
          </h3>

          {successOperation && (
            <div className="alert alert-success">Opeation Success</div>
          )}

          <form ref={formEL} class="needs-validation" novalidate>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => updateName(e)}
                minLength="4"
                maxLength="20"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                value={userEmail}
                onChange={(e) => updateUserEmail(e)}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter Mobile"
                value={mobile}
                onChange={(e) => updateMobile(e)}
                min="999999999"
                max="9999999999"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => updatePassword(e)}
                required
              />
            </div>

            <div>
              <Button
                variant="outline-dark"
                className="w-100 mb-3 btn btn-dark text-light"
                onClick={(e) => RegisterUser(e)}
              >
                Register
              </Button>
            </div>
            {/* <div>
              <input
                type="button"
                className="btn btn-outline-dark w-100"
                value="Login"
                onClick={() => history.push("/userlogin")}
              />
            </div> */}
          </form>
        </div>
        <div className="col-3 col-md-3  d-none d-md-block"></div>
      </div>
    </div>
  );
}
