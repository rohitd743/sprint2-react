const initState = {
  employee: {},
  list: [],

  sampleList: ["Delhi", "Kolkata", "Chennai", "Mumbai"],
};

// ACTION TYPES
const EMPLOYEE_CREATE = "EMPLOYEE_CREATE";
const EMPLOYEE_UPDATE = "EMPLOYEE_UPDATE";
const EMPLOYEE_DELETE = "EMPLOYEE_DELETE";
const EMPLOYEE_GET_ALL = "EMPLOYEE_GET_ALL";
const EMPLOYEE_GET_BY_ID = "EMPLOYEE_GET_BY_ID";

// ACTIONS ::
export function createEmployeeAction(payload) {
  return { type: EMPLOYEE_CREATE, payload: payload };
}

export function updateEmployeeAction(payload) {
  return { type: EMPLOYEE_CREATE, payload: payload };
}

export function deleteEmployeeAction(payload) {
  return { type: EMPLOYEE_CREATE, payload: payload };
}

export function getAllEmployeeAction(payload) {
  return { type: EMPLOYEE_CREATE, payload: payload };
}

export function getByIdEmployeeAction(payload) {
  return { type: EMPLOYEE_CREATE, payload: payload };
}

// REDUCER LOGIC
export function EmployeeReducer(state = initState, action) {
  switch (action.type) {
    case EMPLOYEE_CREATE:
      // TODO
      return state;
    case EMPLOYEE_UPDATE:
      // TODO
      return state;
    case EMPLOYEE_DELETE:
      // TODO
      return state;
    case EMPLOYEE_GET_ALL:
      // TODO
      return state;
    case EMPLOYEE_GET_BY_ID:
      // TODO
      return state;

    default:
      return state;
  }
}
