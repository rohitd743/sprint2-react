const initState = {
  organization: {},
  list: [],

  reforg: {},
};

// ACTION TYPES
const ORG_REGISTER = "ORG_REGISTER";
const ORG_UPDATE = "ORG_UPDATE";
const ORG_GET_ALL = "ORG_GET_ALL";

const REF_ORG = "REF_ORG";

// ACTIONS :: COmponents are interacting with this action
export function OrgRegisterAction(payload) {
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = "http://localhost:8080/api/organisation/details";
    const requestBody = { ...payload };

    // HTTP Client
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    // UPDATE THE UI
    dispatch({ type: ORG_REGISTER, payload: payload });
  };
}

export function updateOrgAction(payload) {
  // return { type: EMPLOYEE_UPDATE, payload: payload };
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = `http://localhost:8080/api/organisation/update/${payload.orgID}`;
    const requestBody = { ...payload };

    await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    // update the ui.
    dispatch(updateRefOrganization({}));
  };
}

export function getAllOrganizationAction(payload) {
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = "http://localhost:8080/api/organisation/";

    // HTTP Client / POSTMAN / SWAGGER
    const response = await fetch(url);
    const organizationList = await response.json();

    // Update the UI
    dispatch({ type: ORG_GET_ALL, payload: organizationList });
  };
}

export function updateRefOrganization(payload) {
  return { type: REF_ORG, payload: payload };
}

// REDUCER LOGIC
export function OrgRegisterReducer(state = initState, action) {
  switch (action.type) {
    case ORG_REGISTER:
      return { ...state, list: [action.payload, ...state.list] };
    case ORG_UPDATE:
      // TODO
      return { ...state, list: action.payload };

    case ORG_GET_ALL:
      // TODO
      return { ...state, list: action.payload };

    case REF_ORG:
      return { ...state, reforg: action.payload };

    default:
      return state;
  }
}
