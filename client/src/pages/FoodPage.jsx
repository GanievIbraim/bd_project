import { useEffect, useState } from "react";
import { Card, Button, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchOneFood } from "../http/foodAPI";

const FoodPage = () => {
  const [food, setFood] = useState({ info: [] });
  const {id} = useParams();

  useEffect(() => {
    fetchOneFood(id).then((data) => setFood(data));
  }, [id]);

  return (
    <Container className="mt-4">
      <h1>Блюдо 1</h1>
      <Row>
        {/* Колонка с картинкой */}
        <Col sm={5}>
          <Image src={process.env.REACT_APP_API_URL + food.img} style={{ width: "32vw" }} />
        </Col>
        {/* // Колонка с информацией */}
        <Col>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              height: "100%",
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h2>{food.name}</h2>
            <h3>От: {food.price} руб.</h3>
            <p style={{ "font-size": "1.1rem" }}>{food.description}</p>
            <Button variant={"outline-dark"}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export { FoodPage };
