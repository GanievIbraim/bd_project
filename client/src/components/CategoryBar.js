import { useContext } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { Card, Row, Col } from "react-bootstrap";

const CategoryBar = observer(() => {
  const { food } = useContext(Context);
  return (
    <Row>
      <h4>Категория еды</h4>
      {food.categories.map((category) => (
        <Col xs={3} key={category.id}>
          <Card
            style={{ textAlign: "center", margin: "2px" }}
            
            className="p-2"
            onClick={() => food.setSelectedCategory(category)}
            border={
              category.id === food.selectedCategory.id ? "primary" : "light"
            }
          >
            {category.name}
          </Card>
        </Col>
      ))}
    </Row>
  );
});

export default CategoryBar;
