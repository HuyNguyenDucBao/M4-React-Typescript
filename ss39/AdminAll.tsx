import React from "react";
import { Col, Row } from "react-bootstrap";

import Router from "./Router";
import Dashboard from "./Admin/Doashboard";

const AdminAll = () => {
  return (
    <div>
      <Row>
        <Col xs={2}>
          <Dashboard />
        </Col>

        <Col xs={10}>
          <Router />
        </Col>
      </Row>
    </div>
  );
};

export default AdminAll;
