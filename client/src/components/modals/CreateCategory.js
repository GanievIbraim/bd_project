import { Form } from "react-bootstrap";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { createCategory } from "../../http/foodAPI";

function CreateCategory() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [value, setValue] = useState();
  const addCategory = () => {
    createCategory({ name: value }).then(() => {
      setValue("");
      handleClose();
    });
  };
  return (
    <>
      <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={handleShow}
      >
        Добавить Категорию
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Новая Категория</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={"Введите название категории блюда"}
            ></Form.Control>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={"outline-danger"} onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant={"outline-success"} onClick={addCategory}>
            Добавить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateCategory;
