import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Dashboard, Home, Login } from "./pages";
import { RequireAuth } from "./features/auth";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={<RequireAuth><Dashboard /></RequireAuth>}
        />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
