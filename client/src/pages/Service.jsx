import { Container } from "react-bootstrap"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import RestaurantBar from "../components/RestaurantBar"
import CategoryBar from "../components/CategoryBar"
import FoodList from "../components/FoodList"

const Service = () => {
    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <RestaurantBar />
                </Col>

                <Col md={9}>
                    <CategoryBar />
                    <FoodList />
                </Col>
            </Row>
        </Container>
    )
}

export { Service }