import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {
  Grid3x3GapFill,
  Calendar3,
  Capsule,
  Envelope,
  Wallet2,
  Gear,
  QuestionCircle,
  Bank,
} from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Navbar
        bg="light"
        variant="light"
        expand="lg"
        className="flex-column vh-100"
      >
        <Container className="p-0">
          <Navbar.Brand href="#home" className="text-primary mb-4 ">
            Sales.
          </Navbar.Brand>
        </Container>
        <div className="d-flex flex-column  h-100 ">
          <Nav className="flex-column">
            <NavLink
              className="nav-link mb-2 d-flex align-items-center"
              to="/admin"
            >
              <Bank className="me-2" /> Lab Test
            </NavLink>
            <NavLink
              className="nav-link mb-2 d-flex align-items-center"
              to="/dashboard"
            >
              <Grid3x3GapFill className="me-2" /> Dashboard
            </NavLink>
            <NavLink
              className="nav-link mb-2 d-flex align-items-center"
              to="/appointment"
            >
              <Calendar3 className="me-2" /> Appointment
            </NavLink>
            <NavLink
              className="nav-link mb-2 d-flex align-items-center"
              to="/medicineorder"
            >
              <Capsule className="me-2" /> Medicine Order
            </NavLink>
            <NavLink
              className="nav-link mb-2 d-flex align-items-center"
              to="/message"
            >
              <Envelope className="me-2" /> Message
            </NavLink>
            <NavLink
              className="nav-link mb-2 d-flex align-items-center"
              to="/payment"
            >
              <Wallet2 className="me-2" /> Payment
            </NavLink>
            <NavLink
              className="nav-link mb-2 d-flex align-items-center"
              to="/settings"
            >
              <Gear className="me-2" /> Settings
            </NavLink>
          </Nav>
          <Nav className="flex-column mt-auto">
            <NavLink className="nav-link d-flex align-items-center" to="/help">
              <QuestionCircle className="me-2" /> Help
            </NavLink>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
};

export default Dashboard;
