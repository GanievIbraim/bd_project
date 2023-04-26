import { useContext } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import { Row } from "react-bootstrap";
import FoodItem from "./FoodItem";

const FoodList = observer(() => {
  const { food } = useContext(Context);
  
  function catName(foodCatId) {
    const result = food.categories.filter((cat) => cat.id == foodCatId)
    return result[0].name;
  }

  return (
    <Row className="d-flex">
      
      
      {food.foods.map((food) => (
        
        <FoodItem key={food.id} food={food} categoryName={catName(food.categoryId)}/>
      ))}
    </Row>
  );
});

export default FoodList;
