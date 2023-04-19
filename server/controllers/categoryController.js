const ApiError = require('../error/ApiError');
const {
    Category
} = require("../models/models")

class CategoryController {
    async create(req, res) {
        const {
            name
        } = req.body
        const category = await Category.create({
            name
        })
        return res.json(category)
    }

    async getAll(req, res) {
        const categorys = await Category.findAll()
        return res.json(categorys)
    }

    async deleteItem(req, res, next) {
        try {
            const {
                id
            } = req.body
            const result = await Category.destroy({
                where: {
                    id
                }
            })
            if (result) {
                res.json({
                    result
                })
            } else {
                return next(ApiError.badRequest('Объекта по такому id не сущесвует'))
            }
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }
}

module.exports = new CategoryController()