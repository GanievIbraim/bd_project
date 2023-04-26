import { Form } from "react-bootstrap";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function DeleteRestaurant() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [value, setValue] = useState("");

  const delRestaurant = async () => {
    try {
      const result = await axios.delete(
        `${process.env.REACT_APP_API_URL}api/restaurant`,
        {
          data: { name: value },
        }
      );
      console.log(result.data);
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button
        variant={"outline-danger"}
        className="mt-4 p-2"
        onClick={handleShow}
      >
        Удалить Ресторан
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Ресторан</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={"Введите название ресторана"}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={"outline-dark"} onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant={"outline-danger"} onClick={delRestaurant}>
            Удалить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteRestaurant;
