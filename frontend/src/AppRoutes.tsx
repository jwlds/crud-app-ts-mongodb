import React, {Suspense}from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";


import HomePage from "./pages/home_page";



const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<h1>..........</h1>}/>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
      </Routes>{" "}
    </Router>
  );
};

export default AppRoutes;