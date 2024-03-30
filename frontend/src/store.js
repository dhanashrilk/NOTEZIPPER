import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "./reducers/userReducers";
import {
  noteCreateReducer,
  noteDeleteReducer,
  noteListReducer,
  noteUpdateReducer,
} from "./reducers/notesReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  noteList: noteListReducer,
  noteCreate: noteCreateReducer,
  noteUpdate: noteUpdateReducer,
  noteDelete: noteDeleteReducer,
  userUpdate: userUpdateReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

// /{
//   "name": "frontend",
//   "proxy": "http://127.0.0.1:5000",
//   "version": "0.1.0",
//   "private": true,
//   "dependencies": {
//     "@testing-library/jest-dom": "^5.11.4",
//     "@testing-library/react": "^11.1.0",
//     "@testing-library/user-event": "^12.1.10",
//     "axios": "^0.21.0",
//     "react": "^18.2.0",
//     "react-bootstrap": "^1.6.8",
//     "react-dom": "^18.2.0",
//     "react-markdown": "^6.0.3",
//     "react-redux": "^7.2.9",
//     "react-router": "^6.22.3",
//     "react-router-dom": "^6.22.3",
//     "react-scripts": "4.0.0",
//     "redux": "^4.2.1",
//     "redux-devtools-extension": "^2.13.9",
//     "redux-thunk": "^2.4.2",
//     "web-vitals": "^0.2.4"
//   },
//   "scripts": {
//     "start": "react-scripts start",
//     "build": "react-scripts build",
//     "test": "react-scripts test",
//     "eject": "react-scripts eject"
//   },
//   "eslintConfig": {
//     "extends": [
//       "react-app",
//       "react-app/jest"
//     ]
//   },
//   "browserslist": {
//     "production": [
//       ">0.2%",
//       "not dead",
//       "not op_mini all"
//     ],
//     "development": [
//       "last 1 chrome version",
//       "last 1 firefox version",
//       "last 1 safari version"
//     ]
//   },
//   "devDependencies": {
//     "@babel/plugin-proposal-private-property-in-object": "*",
//     "@types/react-router-dom": "^5.3.3"
//   }
// }
