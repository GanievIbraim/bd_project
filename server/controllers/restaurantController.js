const {Restaurant} = require('../models/models')
const ApiError = require('../error/ApiError')

class RestaurantController {
    async create(req, res) {
        const {name} = req.body
        const restaurant = await Restaurant.create({name})
        return res.json(restaurant)
    }

    async getAll(req, res) {
        const restaurants = await Restaurant.findAll()
        return res.json(restaurants)
    }

    async deleteItem(req, res, next) {
        try {
            const {
                id
            } = req.body
            const result = await Restaurant.destroy({
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

module.exports = new RestaurantController()