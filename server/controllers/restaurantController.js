const { Restaurant } = require("../models/models");
const ApiError = require("../error/ApiError");

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

  async deleteItem(req, res, next) {
    try {
      const { name} = req.body;
      const result = await Restaurant.destroy({
        where: {
          name,
        },
      });
      if (result) {
        res.json({
          result,
        });
      } else {
        return next(ApiError.badRequest("Объекта по такому name не сущесвует"));
      }
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

}

module.exports = new RestaurantController();
