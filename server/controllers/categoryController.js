const ApiError = require("../error/ApiError");
const { Category } = require("../models/models");
const { Food } = require("../models/models");

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

  async deleteCategoryAndFood (req, res) {
    const { name } = req.body;
  
    try {
      // Найти категорию для удаления
      const category = await Category.findOne({ where: { name } });
  
      if (!category) {
        return res.status(404).json({ error: "Категория не найдена" });
      }
  
      // Удалить все дочерние элементы из таблицы "food"
      await Food.destroy({ where: { categoryId: category.id } });
  
      // Удалить категорию
      await Category.destroy({ where: { id: category.id } });
  
      return res.status(204).json();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Ошибка сервера" });
    }
  };
  
}

module.exports = new CategoryController();
