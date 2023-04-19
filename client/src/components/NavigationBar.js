import { useContext } from "react";
import { Context } from "../index";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FOOD_ROUTE } from "../utils/consts";
import Button from "react-bootstrap/Button";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href={FOOD_ROUTE}>Delivery Service</Navbar.Brand>
        {user.isAuth ? (
          <Nav className="ml-auto">
            <Button variant="outline-light">Админ панель</Button>
            <Link to="/login">
            <Button
              style={{ margin: "0 10px" }}
              variant="outline-light"
            >
              Войти
            </Button>
            </Link>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Link to="/registration">
              <Button
                variant="outline-light"
                onClick={() => user.setIsAuth(true)}
              >
                Авторизация
              </Button>
            </Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
