import React, { ChangeEvent, FormEvent, useEffect } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { DataItem } from "./data";

interface MidProps {
  car: DataItem;
  setCar: React.Dispatch<React.SetStateAction<DataItem>>;
  onSubmit: (car: DataItem) => void;
  isEditing: boolean;
}

const Mid: React.FC<MidProps> = ({ car, setCar, onSubmit, isEditing }) => {
  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };

  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(car);
  };

  return (
    <div className="p-3">
      <h3 className="mb-4">{isEditing ? "Edit Car" : "Add New Car"}</h3>
      <Form onSubmit={handleForm}>
        <Row>
          <Col sm={6} lg={3} className="mb-3">
            <Form.Group controlId="Name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={car.Name}
                name="Name"
                onChange={changeInput}
              />
            </Form.Group>
          </Col>
          <Col sm={6} lg={3} className="mb-3">
            <Form.Group controlId="Color">
              <Form.Label>Color</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Color"
                value={car.Color}
                name="Color"
                onChange={changeInput}
              />
            </Form.Group>
          </Col>
          <Col sm={6} lg={3} className="mb-3">
            <Form.Group controlId="Price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Price"
                value={car.Price}
                name="Price"
                onChange={changeInput}
              />
            </Form.Group>
          </Col>
          <Col sm={6} lg={3} className="mb-3">
            <Form.Group controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Date"
                value={car.date}
                name="date"
                onChange={changeInput}
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="d-flex justify-end">
          {" "}
          <Button type="submit" variant="primary">
            {isEditing ? "Update" : "Add"}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Mid;
