import React from "react";
import { Table, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { DataItem } from "./data";

type PropsType = {
  data: DataItem[];
  onDelete: (id: number | null) => void;
  onEdit: (car: DataItem) => void;
};

const List = ({ data, onDelete, onEdit }: PropsType) => {
  const cellStyle = {
    padding: "12px 16px",
    border: "none",
    backgroundColor: "white",
  };

  const headerStyle = {
    ...cellStyle,
    backgroundColor: "#f8f9fa",
    fontWeight: "normal",
    color: "#6c757d",
  };

  return (
    <div style={{ padding: "20px" }}>
      <Table
        style={{
          borderCollapse: "separate",
          borderSpacing: "0 8px",
          background: "#f8f9fa",
        }}
      >
        <thead>
          <tr>
            <th style={headerStyle}>Invoice ID</th>
            <th style={headerStyle}>Date</th>
            <th style={headerStyle}>Name</th>
            <th style={headerStyle}>Price</th>
            <th style={headerStyle}>Color</th>
            <th style={headerStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((car) => (
            <tr key={car.Id}>
              <td style={{ ...cellStyle, color: "#007bff" }}>{car.Id}</td>
              <td style={cellStyle}>{car.date}</td>
              <td style={cellStyle}>{car.Name}</td>
              <td style={cellStyle}>{car.Price}</td>
              <td style={cellStyle}>{car.Color}</td>
              <td style={cellStyle}>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => onDelete(car.Id)}
                >
                  Xoa
                </Button>{" "}
                <Button variant="primary" size="sm" onClick={() => onEdit(car)}>
                  Sua
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default List;
