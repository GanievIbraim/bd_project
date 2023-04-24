import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FoodItem = ({ food }) => {
  return (
    <Col md={2} className={"mt-3"} style={{ margin: "0 12px" }}>
      <Link to={`/food/${food.id}`} style={{ "text-decoration": "none" }}>
        <Card style={{ width: 180, cursor: "pointer" }} border={"light"}>
          <img
            alt="Food"
            style={{
              "object-fit": "cover",
              margin: "auto",
              width: "180px",
              height: "180px",
            }}
            src={process.env.REACT_APP_API_URL + food.img}
          ></img>
          <div className="text-black-50 mt-2 d-flex justify-content-between align-items-center">
            <div>Samsung...</div>
          </div>
          <div>{food.name} </div>
        </Card>
      </Link>
    </Col>
  );
};

export default FoodItem;
