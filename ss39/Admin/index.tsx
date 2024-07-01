import React, { useState, useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Dashboard from "./Doashboard";
import Mid from "./Mid";
import Search from "./Search";
import List from "./List";
import { DataItem, data as inData } from "./data";
import Router from "../Router";

function Admin() {
  const [data, setData] = useState(inData);
  const [editingCar, setEditingCar] = useState<DataItem | null>(null);
  const [currentCar, setCurrentCar] = useState<DataItem>({
    Id: null,
    date: "",
    Name: "",
    Price: "",
    Color: "",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const addOrUpdateCar = (car: DataItem) => {
    if (editingCar) {
      setData(data.map((item) => (item.Id === car.Id ? car : item)));
      setEditingCar(null);
    } else {
      setData([...data, { ...car, Id: data.length + 1 }]);
    }
    setCurrentCar({
      Id: null,
      date: "",
      Name: "",
      Price: "",
      Color: "",
    });
  };

  const deleteCar = (id: number | null) => {
    setData(data.filter((car) => car.Id !== id));
  };

  const handleEdit = (car: DataItem) => {
    setEditingCar(car);
    setCurrentCar(car);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const filteredData = useMemo(() => {
    return data.filter((car) =>
      Object.values(car).some((value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [data, searchTerm]);
  const handleRestart = () => {
    setSearchTerm("");
  };
  return (
    <Container fluid>
      <Row>
        <Col xs={1}></Col>

        <Col xs={10}>
          <Search onSearch={handleSearch} onRestart={handleRestart} />
          <Mid
            car={currentCar}
            setCar={setCurrentCar}
            onSubmit={addOrUpdateCar}
            isEditing={!!editingCar}
          />
          <List data={filteredData} onDelete={deleteCar} onEdit={handleEdit} />
        </Col>
      </Row>
    </Container>
  );
}

export default Admin;
