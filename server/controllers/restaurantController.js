const { Restaurant } = require("../models/models");
const ApiError = require("../error/ApiError");
const { Food } = require("../models/models");

class RestaurantController {
  async create(req, res) {
    const { name } = req.body;
    const restaurant = await Restaurant.create({ name });
    return res.json(restaurant);
  }

  async getAll(req, res) {
    const restaurants = await Restaurant.findAll();
    return res.json(restaurants);
  }

  async deleteCategoryAndFood (req, res) {
    const { name } = req.body;
  
    try {
      // Найти категорию для удаления
      const restaurant = await Restaurant.findOne({ where: { name } });
  
      if (!restaurant) {
        return res.status(404).json({ error: "Категория не найдена" });
      }
  
      // Удалить все дочерние элементы из таблицы "food"
      await Food.destroy({ where: { restaurantId: restaurant.id } });
  
      // Удалить категорию
      await Restaurant.destroy({ where: { id: restaurant.id } });
  
      return res.status(204).json();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Ошибка сервера" });
    }
  };

}

module.exports = new RestaurantController();
