import { useContext } from "react";
import { Context } from "../index";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { observer } from "mobx-react-lite";
import { ADMIN_ROUTE, LOGIN_ROUTE } from "../utils/consts";

const NavBar = observer(() => {
  const { user } = useContext(Context);

  console.log(user)
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
            <Button  href="/spravka" variant="outline-light" style={{ margin: "0 10px" }}>
              Справка
            </Button>
            <Button href={`${ADMIN_ROUTE}`} variant="outline-light" style={{ margin: "0 10px 0px 0" }}>
              Админ панель
            </Button>
            <Button href="/profile" variant="outline-light">
              Мой профиль
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
            <Button  href="/spravka" variant="outline-light" style={{ margin: "0 10px" }}>
              Справка
            </Button>
            <Button variant="outline-light" href={`${LOGIN_ROUTE}`}>
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
