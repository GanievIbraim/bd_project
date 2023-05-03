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
import axios from "axios";

const UpdateFood = observer(({ oldFood }) => {
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

  const upFood = async () => {
    const formData = new FormData();

    formData.append("name", name || oldFood.name);
    formData.append("price", `${price}` || oldFood.price);
    formData.append("img", file);
    formData.append("description", description || oldFood.description);
    formData.append(
      "restaurantId",
      food.selectedRestaurant.id || oldFood.restaurantId
    );
    formData.append(
      "categoryId",
      food.selectedCategory.id || oldFood.categoryId
    );
    // console.log(file.name);
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}api/food/${oldFood.id}`,
        formData
      );
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button
        variant={"primary"}
        className="p-2"
        onClick={handleShow}
      >
        Изменить блюдо
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Редактирование</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Dropdown className="mt-2 mb-2">
              <Dropdown.Toggle>
                {food.selectedRestaurant.name || "Выберете Ресторан"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {food.restaurants.map((restaurant) => (
                  <Dropdown.Item
                    onClick={() => food.setSelectedRestaurant(restaurant)}
                    key={restaurant.id}
                  >
                    {restaurant.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="mt-2 mb-2">
              <Dropdown.Toggle>
                {food.selectedCategory.name || "Выберете Категорию"}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {food.categories.map((category) => (
                  <Dropdown.Item
                    onClick={() => food.setSelectedCategory(category)}
                    key={category.id}
                  >
                    {category.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-3"
              placeholder="Введите название блюда"
            />
            <Form.Control
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="mt-3"
              placeholder="Введите стоимость блюда"
              type="number"
            />
            <Form.Control className="mt-3" type="file" onChange={selectFile} />
            <Form.Control
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              as="textarea"
              className="mt-3"
              placeholder="Введите описание блюда"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={"outline-danger"} onClick={handleClose}>
            Закрыть
          </Button>
          <Button href="/" variant={"outline-success"} onClick={upFood}>
            Изменить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
});

export default UpdateFood;
