import "antd/dist/reset.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./providers/auth.provider";
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
      <ToastContainer
        position="bottom-right"
        newestOnTop
        closeOnClick
        style={{ zIndex: 1, marginBottom: "25px", alignItems: "end" }}
      />
    </Router>
  </React.StrictMode>
);