import { combineReducers } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

import { EmployeeReducer } from "./EmpoyeeReducer";
import { UserLoginReducer } from "./UserLoginReducer";
import { UserRegisterReducer } from "./UserRegisterReducer";

const rootReducer = combineReducers({
  UserLogin: UserLoginReducer,
  UserRegister: UserRegisterReducer,
  // depart : DepartRducer,
  //vechil: VechuileReucer
});

// const store = createStore(rootReducer);
export const store = createStore(rootReducer, applyMiddleware(thunk));
