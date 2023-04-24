import React from "react";
import { Container } from "react-bootstrap";
import CreateRestaurant from "../components/modals/CreateRestaurant";
import CreateCategory from "../components/modals/CreateCategory";
import CreateFood from "../components/modals/CreateFood";


const Admin = () => {

  return (
    <Container className="d-flex flex-column">
    
      <CreateRestaurant/>
      <CreateCategory/>
      <CreateFood/>

    </Container>
  );
};

export { Admin };
