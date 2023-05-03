const Router = require('express')
const router = new Router()
const restaurantController = require('../controllers/restaurantController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), restaurantController.create)
router.get('/', restaurantController.getAll)
router.delete('/',  restaurantController.deleteCategoryAndFood) 

module.exports = router