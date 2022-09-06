import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

const ShowConcerts = ({ concerts }) => {
  return (
    <>
      {concerts ? (
        <div>
          {concerts.map((item, i) => (
            <>
              <Container className="d-flex justify-content-center mt-3">
                <Row>
                  <Col key={item._id} sm={5}>
                    <img
                      variant="top"
                      src={item.imageUrl}
                      alt={`picture restaurant ${item.restoName}`}
                      className="col-10"
                    />
                  </Col>
                  <Col sm={5} className="align-self-center">
                    <div>
                      <div>
                        <Card.Text className="text-capitalize fs-3 fw-bold">
                          {item.title}
                        </Card.Text>
                      </div>
                      <div>
                        <Card.Text className="text-capitalize">
                          {item.aboutEvent}
                        </Card.Text>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </>
          ))}
        </div>
      ) : (
        <h2>There is not concerts on our database</h2>
      )}
    </>
  );
};

export default ShowConcerts;
