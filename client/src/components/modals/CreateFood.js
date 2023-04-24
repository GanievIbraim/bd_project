import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Context } from "../../index";
import { Dropdown, Form } from "react-bootstrap";

function CreateFood() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { food } = useContext(Context);

  return (
    <>
      <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={handleShow}
      >
        Добавить блюдо
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Новое блюдо</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Dropdown className="mt-2 mb-2">
              <Dropdown.Toggle>Выберете Ресторан</Dropdown.Toggle>
              <Dropdown.Menu>
                {food.restaurants.map((restaurant) => (
                  <Dropdown.Item key={restaurant.id}>
                    {restaurant.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="mt-2 mb-2">
              <Dropdown.Toggle>Выберете Категорию</Dropdown.Toggle>
              <Dropdown.Menu>
                {food.categories.map((category) => (
                  <Dropdown.Item key={category.id}>
                    {category.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Form.Control
              className="mt-3"
              placeholder="Введите название блюда"
            />
            <Form.Control
              className="mt-3"
              placeholder="Введите стоимость блюда"
              type="number"
            />
            <Form.Control className="mt-3" type="file"/>
            <Form.Control
              rows={3}
              as="textarea"
              className="mt-3"
              placeholder="Введите описание блюда"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={"outline-danger"} onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant={"outline-success"}>Добавить</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateFood;
