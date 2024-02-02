import React from "react";
import ReactDOM from "react-dom/client.js";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import counterStore from "../store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={counterStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
