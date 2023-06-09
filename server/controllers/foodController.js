const uuid = require('uuid')
const path = require('path')
const {Food} = require('../models/models')
const ApiError = require('../error/ApiError')

class FoodController{
    async create(req, res, next){
        try {let {name, price, description, categoryId, restaurantId} = req.body
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))

        const food = await Food.create({name, price, description, categoryId, restaurantId, img: fileName})

        return res.json(food)
        } catch (e) {
           next(ApiError.badRequest(e.message)) 
        }
    }

    async getAll(req, res){
        let {categoryId, restaurantId, limit, page} = req.query
        page = page || 1
        limit = limit || 1
        let offset = page * limit - limit

        let foods;
        if (!categoryId && !restaurantId){
            foods = await Food.findAndCountAll({limit, offset})
        }
        if (categoryId && !restaurantId){
            foods = await Food.findAndCountAll({where: {categoryId}, limit, offset})
        }
        if (!categoryId && restaurantId){
            foods = await Food.findAndCountAll({where: {restaurantId}, limit, offset})
        }
        if (categoryId && restaurantId){
            foods = await Food.findAndCountAll({where: {restaurantId, categoryId}, limit, offset})
        }
        return res.json(foods)

    }

    async getOne(req, res){
        const {id} = req.params
        const food = await Food.findOne(
            {
                where: {id},
            }
        )
        return res.json(food)
    }

    async deleteItem(req, res, next) {
        try {
            const {
                id
            } = req.body
            const result = await Food.destroy({
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


module.exports = new FoodController()