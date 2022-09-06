import React, { useState, useEffect } from "react";
// import AddConcert from "./components/concert/AddConcerts";

import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

import { ShowConcerts } from "../components";

function Concerts() {
  const [concerts, setConcerts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/concerts")
      .then((response) => {
        setConcerts(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <main>
        {/* <Container>
          <Row>
            <Col sm={12}> */}
        <ShowConcerts concerts={concerts} />
        {/* </Col>
          </Row>
        </Container> */}
      </main>
    </>
  );
}

export default Concerts;
