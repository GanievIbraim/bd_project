import React from "react";
import { Container } from "react-bootstrap";
import CreateRestaurant from "../components/modals/CreateRestaurant";
import CreateCategory from "../components/modals/CreateCategory";
import DeleteRestaurant from "../components/modals/DeleteRestaurant";
import DeleteCategory from "../components/modals/DeleteCategory";
import CreateFood from "../components/modals/CreateFood";
import UpdateFood from "../components/modals/UpdateFood";
import WriteId from "../components/modals/WriteId";
import UpdatePage from "../components/modals/UpdatePage";
import Report from "../components/modals/Report";

const Admin = () => {
  return (
    <Container className="d-flex flex-column">
      <CreateRestaurant />
      <CreateCategory />
      <CreateFood />
      <WriteId />
      <DeleteRestaurant />
      <DeleteCategory />
      <UpdatePage />
      <Report />
    </Container>
  );
};

export { Admin };
