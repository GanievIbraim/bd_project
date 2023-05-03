import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext } from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const ReportInfo = observer(() => {
  const { food } = useContext(Context);
  const { user } = useContext(Context);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function catName(foodCatId) {
    const result = food.categories.filter((cat) => cat.id == foodCatId);
    return result[0].name;
  }

  function restName(foodRestId) {
    const result = food.restaurants.filter((rest) => rest.id == foodRestId);
    return result[0].name;
  }

  return (
    <>
      <Button variant={"primary"} className="mt-4 p-2" onClick={handleShow}>
        Отчет
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        fullscreen={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Отчеты</Modal.Title>
        </Modal.Header>
        <Row className="mt-2 row justify-content-center">
          <Col md={9}>
            <h2>Блюда</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Ресторан</th>
                  <th>Категория</th>
                  <th>Название</th>
                  <th>Описание</th>
                  <th>Цена</th>
                </tr>
              </thead>
              <tbody>
                {food.foods.map((food) => (
                  <tr
                    key={food.id}
                  >
                    <td>{food.id}</td>
                    <td>{restName(food.restaurantId)}</td>
                    <td>{catName(food.categoryId)}</td>
                    <td>{food.name}</td>
                    <td>{food.description}</td>
                    <td>{food.price}</td>
                    
                  </tr>
                ))}
              </tbody>
            </Table>
            <h2>Рестораны</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Название</th>
                </tr>
              </thead>
              <tbody>
                {food.restaurants.map((restaurant) => (
                  <tr key={restaurant.id}>
                    <td>{restaurant.id}</td>
                    <td>{restaurant.name}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <h2>Категории блюд</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Название</th>
                </tr>
              </thead>
              <tbody>
                {food.categories.map((category) => (
                  <tr
                    key={category.id}
                  >
                    <td>{category.id}</td>
                    <td>{category.name}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <h2>Зарегистрированные пользователи</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Имя</th>
                  <th>Фамилия</th>
                  <th>Адрес</th>
                  <th>Номер Телефона</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
              {food.restaurants.map((restaurant) => (
                  <tr key={restaurant.id}>
                    <td>{restaurant.id}</td>
                    <td>{restaurant.name}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Modal>
    </>
  );
});

export default ReportInfo;
