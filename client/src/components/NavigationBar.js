import { useContext } from "react";
import { Context } from "../index";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE } from "../utils/consts";

const NavBar = observer(() => {
  const { user } = useContext(Context);

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Delivery Service</Navbar.Brand>
        {user.isAuth ? (
          <Nav className="ml-auto">
            <Button href={`${ADMIN_ROUTE}`} variant="outline-light">
              Админ панель
            </Button>

            <Button
              style={{ margin: "0 10px" }}
              variant="outline-light"
              onClick={() => logOut()}
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Link to="/registration">
              <Button
                variant="outline-light"
                href={`${LOGIN_ROUTE}`}
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
