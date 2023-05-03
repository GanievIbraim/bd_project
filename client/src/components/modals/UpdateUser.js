import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import axios from "axios";

const UpdateUser = observer((userId) => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [num_tel, setTelPhone] = useState("");

  const updateInfoUser = async () => {
    const formData = new FormData();
    formData.append("name", name || "");
    formData.append("surname", surname || "");
    formData.append("address", address || "");
    formData.append("num_tel", num_tel || "");
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}api/user/${id || Number(userId.userId)}`,
        formData
      );
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button
        variant={"outline-dark"}
        className="mt-4 p-2"
        onClick={handleShow}
      >
        Изменения Данных Пользователя
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Редактирование</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <h2>Необязательное поле</h2>
          <Form.Control
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="mt-3"
              placeholder="Введите ID"
            />
            <p style={{color: "gray"}}>* По умолчанию id = {userId.userId}.</p>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-3"
              placeholder="Введите имя"
            />
            <Form.Control
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              className="mt-3"
              placeholder="Введите фамилию"
            />
            <Form.Control
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-3"
              placeholder="Введите aдрес"
            />
            <Form.Control
              value={num_tel}
              onChange={(e) => setTelPhone(e.target.value)}
              className="mt-3"
              placeholder="Введите номер телефона"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={"outline-danger"} onClick={handleClose}>
            Закрыть
          </Button>
          <Button
            href="/admin"
            variant={"outline-success"}
            onClick={updateInfoUser}
          >
            Изменить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
});

export default UpdateUser;
