import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FoodItem = ({ food, categoryName }) => {

  return (
    <Col md={2} className={"mt-3"} style={{ margin: "0 12px" }}>
      <Link to={`/food/${food.id}`} style={{ textDecoration: "none" }}>
        <Card style={{ width: 180, cursor: "pointer" }} border={"light"}>
          <img
            alt="Food"
            style={{
              objectFit: "cover",
              margin: "auto",
              width: "180px",
              height: "180px",
            }}
            src={process.env.REACT_APP_API_URL + food.img}
          ></img>
          <div className="text-black-50 mt-2 d-flex justify-content-between align-items-center">
            <div>{categoryName}</div>
          </div>
          <div>{food.name} </div>
        </Card>
      </Link>
    </Col>
  );
};

export default FoodItem;
