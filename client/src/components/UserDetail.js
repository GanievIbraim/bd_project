import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import UpdateUser from "./modals/UpdateUser";

const UserDetail = ({ userId }) => {
  const [user, setUser] = useState({});
  const [show, setShow] = useState(true);
  const [showResult, setShowResult] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}api/user/${userId}`
      );
      setUser(response.data);
    };
    fetchUser();
  }, []);

  const openUpdateUser = () => {
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
        Информация о пользователе
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Информация о пользователе</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p>Имя: {user.name}</p>
            <p>Фамилия: {user.surname}</p>
            <p>Адресс проживания: {user.address}</p>
            <p>Номер Телефона: {user.num_tel}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={"outline-success"} onClick={openUpdateUser}>
            Изменить
          </Button>
          <Button variant={"outline-danger"} onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>

      {showResult && (
        <UpdateUser userId={userId} onClose={handleCloseResult} />
      )}
    </>
  );
};

export default UserDetail;
