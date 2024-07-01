import React from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import {
  Search as SearchIcon,
  Bell,
  ArrowCounterclockwise,
} from "react-bootstrap-icons";

interface SearchProps {
  onSearch: (searchTerm: string) => void;
  onRestart: () => void;
}

const Search = ({ onSearch, onRestart }: SearchProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="py-3">
      <Row className="align-items-center">
        <Col md={6} lg={6}>
          <InputGroup>
            <InputGroup.Text>
              <SearchIcon />
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Search"
              onChange={handleChange}
            />
            <Button variant="outline-secondary" onClick={onRestart}>
              <ArrowCounterclockwise />
            </Button>
          </InputGroup>
        </Col>
        <Col md={6} lg={6}>
          <Row className="justify-content-end align-items-center">
            <Col xs="auto">
              <Bell size={24} />
            </Col>
            <Col xs="auto">
              <img
                src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/286791746_715126952939349_2863510425811172870_n.jpg?stp=dst-jpg_p480x480&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=0QNpNeCHWj0Q7kNvgFRADyK&_nc_ht=scontent.fsgn2-9.fna&oh=00_AYBxWIb7bI8lC12HMRogcohtYIeb19vLxoy1NPh2VR2nSg&oe=66808568"
                alt="Profile"
                style={{ width: "30px", height: "30px", borderRadius: "5px" }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Search;
