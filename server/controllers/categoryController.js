const ApiError = require("../error/ApiError");
const { Category } = require("../models/models");

class CategoryController {
  async create(req, res) {
    const { name } = req.body;
    const category = await Category.create({
      name,
    });
    return res.json(category);
  }

  async getAll(req, res) {
    const categories = await Category.findAll();
    return res.json(categories);
  }

  async deleteItem(req, res, next) {
    try {
      const { name } = req.body;
      const result = await Category.destroy({
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

module.exports = new CategoryController();
