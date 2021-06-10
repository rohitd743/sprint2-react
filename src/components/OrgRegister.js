import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { AppNavBar } from "../Common/AppNavBar";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { OrgRegisterAction } from "../redux/OrgRegisterReducer";
import { useRef, useState } from "react";
import { Form } from "react-bootstrap";

export function OrgRegistration() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const formEL = useRef();

  const [successOperation, setSuccessOperation] = useState(false);

  const [orgName, setOrgName] = useState("");
  const [orgHeadquarters, setOrgHeadquarters] = useState("");
  const [orgRevenue, setOrgRevenue] = useState("");
  const [orgEmployees, setOrgEmployees] = useState("");
  const [orgVideokyc, setVideokyc] = useState(false);
  const [creditCard, setCreditCard] = useState(false);

  //update

  //   const [orgName, setOrgName] = useState(state.employ.refemp.firstName);
  //   const [orgHeadquarters, setOrgHeadquarters] = useState("");
  //   const [orgRevenue, setOrgRevenue] = useState(state.organization.reforg.orgRevenue);
  //   const [orgEmployees, setOrgEmployees] = useState(state.organization.reforg.orgEmployees);
  //   const [orgVideokyc, setVideokyc] = useState(state.organization.reforg.orgVideokyc);
  //   const [creditCard, setCreditCard] = useState(state.organization.reforg.creditCard);

  const updateOrgName = (e) => setOrgName(e.target.value);
  const updateOrgHeadquarters = (e) => setOrgHeadquarters(e.target.value);
  const updateOrgRevenue = (e) => setOrgRevenue(e.target.value);
  const updateOrgEmployees = (e) => setOrgEmployees(e.target.value);
  const updateOrgVideokyc = (e) => setVideokyc(e.target.value);
  const updateCreditCard = (e) => setCreditCard(e.target.value);

  const OrgRegister = (e) => {
    e.preventDefault();

    if (formEL.current.checkValidity() === false) {
      // hanlde the false case
      e.preventDefault();
      e.stopPropagation();
      formEL.current.classList.add("was-validated");
    } else {
      dispatch(
        OrgRegisterAction({
          orgName,
          orgHeadquarters,
          orgRevenue,
          orgEmployees,
          orgVideokyc,
          creditCard,
        })
      );

      //success alert
      setSuccessOperation(true);
      setTimeout(() => setSuccessOperation(false), 5000);

      // reset the form
      setOrgName("");
      setOrgHeadquarters("");
      setOrgRevenue("");
      setOrgEmployees("");
      setVideokyc(false);
      setCreditCard(false);
    }
  };

  //update
  //   const updateOrgAction = () => {
  //     dispatch(
  //         updateOrgAction({
  //         id: state.organization.reforg.id,
  //         orgRevenue,
  //           orgEmployees,
  //           orgVideokyc,
  //           creditCard,
  //       })
  //     );

  //     // reset the form
  //     setOrgRevenue("");
  //     setOrgEmployees("");
  //     setVideokyc(false);
  //     setCreditCard(false);
  //   };

  // THIS IS REDUX ACTION CALLING

  return (
    <div className="bg-info" style={{ height: "100vh" }}>
      {/* <AppNavBar /> */}

      <div className="row ">
        <div className="col-3 col-md-3 d-none d-md-block"></div>
        <div className="col-12 col-md-6">
          <h3 className="alert alert-secondary mt-2 d-flex justify-content-center">
            Organization Register
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
                value={orgName}
                onChange={(e) => updateOrgName(e)}
                minLength="4"
                maxLength="10"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Headquarter"
                value={orgHeadquarters}
                onChange={(e) => updateOrgHeadquarters(e)}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter No of Employees"
                value={orgEmployees}
                onChange={(e) => updateOrgEmployees(e)}
                min="0"
                max="999999"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter revenue in Cr"
                value={orgRevenue}
                onChange={(e) => updateOrgRevenue(e)}
                required
              />
            </div>

            <div className="form-group">
              <strong>VideoKYC:</strong>
              <input
                type="checkbox"
                className="m-2"
                // placeholder=""
                value={orgVideokyc}
                onChange={(e) => updateOrgVideokyc(e)}
                required
              />
            </div>

            <div className="form-group ">
              <strong>Credit Card Functionality:</strong>
              <input
                type="checkbox"
                className="m-2"
                // placeholder=""
                value={creditCard}
                onChange={(e) => updateCreditCard(e)}
                required
              />
            </div>

            <div>
              <Button
                variant="outline-dark"
                className="w-100 mb-3 btn btn-dark text-light"
                onClick={(e) => OrgRegister(e)}
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
