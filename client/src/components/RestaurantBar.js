import { useContext } from "react";
import { Context } from "../index";
import ListGroup from 'react-bootstrap/ListGroup';
import { observer } from "mobx-react-lite";

const RestaurantBar = observer(() => {
    const { food } = useContext(Context)
    return (
        <ListGroup>
            {food.restaurants.map(restaurant =>
                <ListGroup.Item
                    style={{ cursor: 'pointer' }}
                    active={restaurant.id === food.selectedRestaurant.id}
                    onClick={() => food.setSelectedRestaurant(restaurant)}
                    key={restaurant.id}
                >
                    {restaurant.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default RestaurantBar;