import { Container } from "react-bootstrap";
import homeEstelaPhoto from "../images/homeEstelaPhoto.jpeg";
import { Helmet } from "react-helmet";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Estela García | Home</title>
      </Helmet>
      <Container className="p-md-5 p-3" fluid="md">
        <figure className="position-relative">
          <figcaption>Professional Tango Singer</figcaption>
          <img
            src={homeEstelaPhoto}
            alt="homeEstelaPhoto"
            className="img-fluid"
          />
        </figure>
      </Container>
    </>
  );
}

export default HomePage;
