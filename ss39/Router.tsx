import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Admin from "./Admin";
import Appointment from "./Appointment";
import MedicineOrder from "./MedicineOrder";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/medicineorder" element={<MedicineOrder />} />
      </Routes>
    </div>
  );
};

export default Router;
