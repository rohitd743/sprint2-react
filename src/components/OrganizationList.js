import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  getAllOrganizationAction,
  updateRefOrganization,
} from "../redux/OrgRegisterReducer";
import { OrganizationModal } from "./OrganizationModal";
import { HomeNavBar } from "../Common/AppNavBar";

export function OrganizationList() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  // console.log(state);

  console.log(state.organization.list);

  const [successOperation, setSuccessOperation] = useState(false);

  // Used to Initialize :: READ THE DATA FROM API
  useEffect(() => {
    dispatch(getAllOrganizationAction());
  }, []);

  const updateOrg = (item) => {
    // we are doing this so that we can access this objec in the form page
    dispatch(updateRefOrganization(item));

    // form page
    history.push("/organizationupsert");
  };

  return (
    <div>
      <HomeNavBar></HomeNavBar>
      <div className="row">
        <div className="col-3 col-md-2 d-none d-md-block"></div>
        <div className="col-12 col-md-8">
          <h3 className="alert alert-secondary">Organization List</h3>

          {successOperation && (
            <div className="alert alert-success">Opeation Success</div>
          )}

          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">Organization Name</th>
              </tr>
            </thead>
            <tbody>
              {[...state.organization.list].map((item, index) => (
                <tr key={index}>
                  <th scope="row">{item.orgID}</th>
                  <td>{item.orgName}</td>
                  <td>
                    <input
                      type="button"
                      onClick={() => updateOrg(item)}
                      value="Edit"
                      className="btn btn-link"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-3 col-md-2 d-none d-md-block"></div>
      </div>

      {/** EMPLOYEE MODAL */}
      <OrganizationModal />
    </div>
  );
}
