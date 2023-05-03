import { useEffect, useState } from "react";
import { Card, Button, Col, Container, Image, Row, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchOneFood, fetchFoods } from "../http/foodAPI";
import axios from "axios";
import UpdateFood from "../components/modals/UpdateFood";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../index";

const FoodPage = observer(() => {
  const [food, setFood] = useState({ info: [] });
  const { id } = useParams();
  const { user } = useContext(Context);

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  useEffect(() => {
    fetchOneFood(id).then((food) => setFood(food));
    fetchFoods(id);
  }, [id]);

  const handleDelete = async (id) => {
    const result = await axios.delete(
      `${process.env.REACT_APP_API_URL}api/food/${id}`
    );
    console.log(result.food);
    fetchFoods();
  };

  return (
    <Container className="mt-4">
      <h1>Карточка блюда</h1>

      <Row style={{ marginTop: "30px" }}>
        {/* Колонка с картинкой */}
        <Col sm={3}>
          <Image
            src={`http://localhost:5000/` + food.img}
            style={{ height: "300px" }}
          />
        </Col>
        {/* // Колонка с информацией */}
        <Col sm={9}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              height: "100%",
              fontSize: 32,
              border: "0px solid lightgray",
            }}
          >
            <h2>{food.name}</h2>
            <h3>От: {food.price} руб.</h3>
            <p style={{ fontSize: "1.1rem" }}>{food.description}</p>
            {user.isAuth ? (
              <Nav className="ml-auto">
                <Button variant={"success"} style={{ marginRight: "5px" }}>
                  Добавить в корзину
                </Button>
                <UpdateFood oldFood={food} />
                <Button
                  style={{ display: "inline", marginLeft: "5px" }}
                  variant={"danger"}
                  href="/"
                  onClick={() => handleDelete(food.id)}
                >
                  Удалить
                </Button>
              </Nav>
            ) : (
              <Row className="d-flex flex-column align-items-center justify-content-around">
                <h5>Войдите, чтобы добавить в корзину</h5>
                <Button
                  style={{ display: "inline", marginLeft: "5px" }}
                  variant={"danger"}
                  href="/login"
                >
                  Войти
                </Button>
              </Row>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
});

export { FoodPage };
