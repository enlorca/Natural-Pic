import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div variant="dark" className="bg-success pt-4 pb-4">
      <Container className="justify-content-center container d-flex">
        <div>
          <Link to="/" className="text-white ms-3 text-decoration-none">
            Home
          </Link>
          <Link
            to="/favoritos"
            className="text-white ms-3 text-decoration-none"
          >
            Favoritos
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
