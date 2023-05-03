import { Form } from "react-bootstrap";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UserDetail from "../UserDetail";

function CreateCategory() {
  const [show, setShow] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [value, setValue] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const openDetail = () => {
    setShowResult(true);
    handleClose();
  };

  const handleCloseResult = () => setShowResult(false);

  return (
    <>
      <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={handleShow}
      >
        Найти по id
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Введите Id</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={"Введите id пользователя"}
            ></Form.Control>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={"outline-danger"} onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant={"outline-success"} onClick={openDetail}>
            Результат
          </Button>
        </Modal.Footer>
      </Modal>

      {showResult && (
        <UserDetail userId={value} onClose={handleCloseResult} />
      )}
    </>
  );
}

export default CreateCategory;
