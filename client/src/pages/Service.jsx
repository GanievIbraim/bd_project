import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RestaurantBar from "../components/RestaurantBar";
import CategoryBar from "../components/CategoryBar";
import FoodList from "../components/FoodList";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Context } from "../index";
import { fetchCategories, fetchRestaurants, fetchFoods } from "../http/foodAPI";
import Pages from "../components/Pages";

const Service = observer(() => {
  const { food } = useContext(Context);

  useEffect(() => {
    fetchRestaurants().then((data) => food.setRestaurants(data));
    fetchCategories().then((data) => food.setCategories(data));
    fetchFoods(null, null, 1, 2).then((data) => {
      food.setFoods(data.rows);
      food.setTotalCount(data.count);
    });
  }, [food]);

  useEffect(() => {
    fetchFoods(
      food.selectedRestaurant.id,
      food.selectedCategory.id,
      food.page,
      1
    ).then((data) => {
      food.setFoods(data.rows);
      food.setTotalCount(data.count);
    });
  }, [food.page, food.selectedRestaurant, food.selectedCategory, food]);

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <RestaurantBar />
        </Col>

        <Col md={9}>
          <CategoryBar />
          <FoodList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});

export { Service };
