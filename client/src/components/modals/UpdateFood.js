import React, { useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Context } from "../../index";
import { Dropdown, Form } from "react-bootstrap";
import {
  fetchCategories,
  fetchRestaurants,
  fetchFoods,
} from "../../http/foodAPI";
import { observer } from "mobx-react-lite";


const UpdateFood = observer(() => {
  const { food } = useContext(Context);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  useEffect(() => {
    fetchRestaurants().then((data) => food.setRestaurants(data));
    fetchCategories().then((data) => food.setCategories(data));
    fetchFoods().then((data) => food.setFoods(data.rows));
  }, [food]);
  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };
  const updateFood = (foodId) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("img", file);
    formData.append("description", description);
    formData.append("restaurantId", food.selectedRestaurant.id);
    formData.append("categoryId", food.selectedCategory.id);
    fetch(`http://localhost:5000/api/foods/${foodId}`, {
      method: "PUT",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => handleClose());
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Редактировать блюдо
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Редактировать блюдо</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Название</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите название"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicDescription">
              <Form.Label>Описание</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите описание"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPrice">
              <Form.Label>Цена</Form.Label>
              <Form.Control
                type="number"
                placeholder="Введите цену"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicFile">
              <Form.Label>Фото</Form.Label>
              <Form.Control type="file" onChange={selectFile} />
            </Form.Group>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {food.selectedRestaurant.name || "Выберите ресторан"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {food.restaurants.map((restaurant) => (
                  <Dropdown.Item
                    key={restaurant.id}
                    onClick={() => food.setSelectedRestaurant(restaurant)}
                  >
                    {restaurant.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {food.selectedCategory.name || "Выберите категорию"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {food.categories.map((category) => (
                  <Dropdown.Item
                    key={category.id}
                    onClick={() => food.setSelectedCategory(category)}
                  >
                    {category.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button
            variant="primary"
            onClick={() => updateFood(food.selectedFood.id)}
          >
            Сохранить изменения
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
});

export default UpdateFood;
