import { Form } from "react-bootstrap";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { createRestaurant } from "../../http/foodAPI";

function CreateRestaurant() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [value, setValue] = useState();
  const addRestaurant = () => {
    createRestaurant({ name: value }).then(() => {
      setValue("");
      handleClose()
    });
  };

  return (
    <>
      <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={handleShow}
      >
        Добавить Ресторан
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Новый Ресторан</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={"Введите название ресторана"}
            ></Form.Control>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={"outline-danger"} onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant={"outline-success"} onClick={addRestaurant}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateRestaurant;
