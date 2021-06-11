import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  getAllOrganizationAction,
  updateRefOrganization,
} from "../redux/OrgRegisterReducer";
import { OrganizationModal } from "./OrganizationModal";
import { UserLoginNavBar } from "../Common/AppNavBar";

export function Organization() {
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

  return (
    <div>
      <UserLoginNavBar></UserLoginNavBar>
      <div className="row">
        <div className=" col-3 col-md-3 d-none d-md-block"></div>
        <div className="col-12 col-md-6 ">
          <h3 className="alert alert-secondary mt-2 d-flex justify-content-center">
            ORGANIZATION RATING
          </h3>

          <table class="table">
            <thead class="table-dark">
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">ORGANIZATION NAME</th>
                <th scope="col">RATING</th>
              </tr>
            </thead>
            <tbody>
              {[...state.organization.list].map((item, index) => (
                <tr key={index}>
                  <th scope="row">{item.orgID}</th>
                  <td>{item.orgName}</td>
                  <td>{item.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-3 col-md-3 d-none d-md-block"></div>
      </div>
      <OrganizationModal />
    </div>
  );
}
