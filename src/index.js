import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList/UserList.jsx";
import UserDetails from "./components/UserDetails/UserDetails.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/user/:id" element={<UserDetails />} />
    </Routes>
  </Router>
);
