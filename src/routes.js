import * as React from "react";
import { Routes, Route } from "react-router-dom";

const PageRoutes = () => {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="about" element={<div>About</div>} />
      </Routes>
    </div>
  );
};

export default PageRoutes;
