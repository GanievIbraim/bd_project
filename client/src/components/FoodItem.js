import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom"
// import { useState } from "react";

const FoodItem = ({food}) => {
  return (
    <Col md={2} className={"mt-3"} style={{margin: "0 12px"}} >
        <Link to={`/food/${food.id}`} style={{"text-decoration": "none"}}>
        <Card style={{width: 150, cursor: "pointer"}} border={"light"}>
          <Image width={150} height={150} src={process.env.REACT_APP_API_URL + food.img}/>
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
