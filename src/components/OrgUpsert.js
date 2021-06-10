import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  OrgRegisterAction,
  updateOrgAction,
} from "../redux/OrgRegisterReducer";

import { OrgUpsertNavBar } from "../Common/AppNavBar";

export function OrgUpsert() {
  const dispatch = useDispatch();
  const history = useHistory();
  const formEL = useRef();
  const state = useSelector((state) => state);

  const [orgName, setOrgName] = useState(state.organization.reforg.orgName);
  const [orgHeadquarters, setOrgHeadquarters] = useState(
    state.organization.reforg.orgHeadquarters
  );
  const [orgRevenue, setOrgRevenue] = useState(
    state.organization.reforg.orgRevenue
  );
  const [orgEmployees, setOrgEmployees] = useState(
    state.organization.reforg.orgEmployees
  );
  const [orgVideokyc, setVideokyc] = useState(
    state.organization.reforg.orgVideokyc
  );
  const [creditCard, setCreditCard] = useState(
    state.organization.reforg.creditCard
  );

  const updateOrgName = (e) => setOrgName(e.target.value);
  const updateOrgHeadquarters = (e) => setOrgHeadquarters(e.target.value);
  const updateOrgRevenue = (e) => setOrgRevenue(e.target.value);
  const updateOrgEmployees = (e) => setOrgEmployees(e.target.value);
  const updateOrgVideokyc = (item) => setVideokyc(item);
  const updateCreditCard = (item) => setCreditCard(item);

  const [successOperation, setSuccessOperation] = useState(false);
  const [errorOperation, setErrorOperation] = useState(false);

  const addOrganization = (e) => {
    e.preventDefault();

    if (formEL.current.checkValidity() === false) {
      // hanlde the false case
      e.preventDefault();
      e.stopPropagation();
      formEL.current.classList.add("was-validated");
    } else {
      // you can write custom valiadation logic here.
      // username :: Speical Character validation
      const re = /[A-z]/;
      if (!re.test(orgName)) {
        alert("Organisation name Vlidation Fails");
        return;
      }

      // THIS IS REDUX ACTION CALLING
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

      // A1 sucess
      setSuccessOperation(true);
      setTimeout(() => setSuccessOperation(false), 2000);

      // A2: navigate to another page
      // history.push("/list-employee");

      // reset the form
      setOrgName("");
      setOrgHeadquarters("");
      setOrgRevenue("");
      setOrgEmployees("");
      setVideokyc("");
      setCreditCard("");
    }
  };

  const updateOrg = () => {
    dispatch(
      updateOrgAction({
        orgID: state.organization.reforg.orgID,
        orgRevenue,
        orgEmployees,
        orgVideokyc,
        creditCard,
      })
    );

    setOrgName("");
    setOrgHeadquarters("");
    setOrgRevenue("");
    setOrgEmployees("");
    setVideokyc("");
    setCreditCard("");
  };

  return (
    <div>
      <OrgUpsertNavBar></OrgUpsertNavBar>
      <div className="row">
        <div className="col-3 col-md-3 d-none d-md-block"></div>
        <div className="col-12 col-md-6">
          <h3 className="alert alert-secondary d-flex justify-content-center mt-2">
            {state.organization.reforg.orgID
              ? "Update Organization"
              : "Organization Register"}
          </h3>

          {/** BELOW THESE TWO TAGS MUST BE CONDITIOANL */}
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
                minLength="3"
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
                onClick={() => updateOrgVideokyc("true")}
              />
            </div>

            <div className="form-group ">
              <strong>Credit Card Functionality:</strong>
              <input
                type="checkbox"
                className="m-2"
                // placeholder=""
                value={creditCard}
                onClick={() => updateCreditCard("true")}
              />
            </div>

            <div className="mb-1">
              {state.organization.reforg.orgID ? (
                <input
                  type="button"
                  className="btn btn-secondary w-100"
                  value="Update Organization"
                  onClick={() => updateOrg()}
                />
              ) : (
                <input
                  type="button"
                  className="btn btn-secondary w-100"
                  value="Add Organization"
                  onClick={(e) => addOrganization(e)}
                />
              )}
            </div>
          </form>
        </div>
        <div className="col-3 col-md-3  d-none d-md-block"></div>
      </div>
    </div>
  );
}
