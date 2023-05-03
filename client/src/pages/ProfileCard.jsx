import React, { useState } from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";

const ProfileCard = () => {
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState(null);

  const handleGetUserByEmail = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}api/user`
      );
      setUserData(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: window.innerHeight - 54 }}
      >
        <Card className="mt-2 row justify-content-center">
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите свою почту"
          />
          <Button variant={"outline-success"} onClick={handleGetUserByEmail} style={{marginTop: "10px"}}>
            Получить данные
          </Button>
          {userData && (
            <>
              <Title>Профиль</Title>
              <Field>
                <Label>Имя:</Label>
                <Value>{userData.name || "пусто"}</Value>
              </Field>
              <Field>
                <Label>Фамилия:</Label>
                <Value>{userData.surname || "пусто"}</Value>
              </Field>
              <Field>
                <Label>Почта:</Label>
                <Value>{userData.email || "пусто"}</Value>
              </Field>
              <Field>
                <Label>Адрес:</Label>
                <Value>{userData.address || "пусто"}</Value>
              </Field>
              <Field>
                <Label>Номер телефона:</Label>
                <Value>{userData.num_tel || "пусто"}</Value>
              </Field>
            </>
          )}
        </Card>
      </Container>
    </>
  );
};

const Card = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 400px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Label = styled.span`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Value = styled.span`
  color: #666;
`;

export { ProfileCard };
