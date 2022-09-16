import React, { useContext } from "react";
import { AuthContext } from "../../context/auth";
import { DeleteConcert } from "./DeleteConcerts";

import { Card, Container, Row, Col } from "react-bootstrap";

const ShowConcerts = ({ concerts }) => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      {concerts ? (
        <div>
          {concerts.map((item) => (
            <div key={item._id}>
              <Container className="d-flex justify-content-center mt-3">
                <Row>
                  <Col sm={5}>
                    <img
                      variant="top"
                      src={item.imageUrl}
                      alt={`${item.title}`}
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
                        <Card.Text className="">{item.aboutEvent}</Card.Text>
                      </div>
                      <div>
                        {item.address ? (
                          <Card.Text className="text-capitalize">
                            <b>Address:&nbsp;</b>
                            <a
                              href={`https://www.google.com/maps/place/${item.address}+${item.addressNumber},+${item.zipCode}+${item.city}`}
                              target="_blanc"
                              className="text-decoration-none"
                            >
                              {item.address} {item.addressNumber},&nbsp;
                              {item.zipCode ? `${item.zipCode},` : ""}{" "}
                              {item.city}.
                            </a>
                          </Card.Text>
                        ) : (
                          ""
                        )}
                      </div>

                      <div>
                        <Card.Text className="">
                          <b>Date:</b> {item.date.slice(8, 10)}-
                          {item.date.slice(5, 7)}-{item.date.slice(0, 4)}{" "}
                          {item.date.slice(11, 16)} hs
                        </Card.Text>
                      </div>
                      {isLoggedIn ? (
                        <DeleteConcert concertID={item._id} />
                      ) : (
                        " "
                      )}
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          ))}
        </div>
      ) : (
        <h2>There are not concerts in database</h2>
      )}
    </>
  );
};

export default ShowConcerts;
