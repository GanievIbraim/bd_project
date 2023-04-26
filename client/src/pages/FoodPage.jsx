import { useEffect, useState } from "react";
import { Card, Button, Col, Container, Image, Row, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchOneFood, fetchFoods } from "../http/foodAPI";
import axios from "axios";

const FoodPage = () => {
  const [food, setFood] = useState({ info: [] });
  const { id } = useParams();

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
    
      <Row style={{marginTop: "30px"}}>
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
            <Nav className="ml-auto">
            <Button variant={"success"} style={{marginRight: "5px"}}>Добавить в корзину</Button>
              <Button
                style={{ display: "inline"}}
                variant={"danger"}
                href="/service"
                onClick={() => handleDelete(food.id)}
              >
                Удалить
              </Button>
              
            </Nav>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export { FoodPage };
