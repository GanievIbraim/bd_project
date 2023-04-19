const Router = require('express')
const router = new Router()
const foodRouter = require('./foodRouter')
const userRouter = require('./userRouter')
const categoryRouter = require('./categoryRouter')
const restaurantRouter = require('./restaurantRouter')

router.use('/user', userRouter)
router.use('/restaurant', restaurantRouter)
router.use('/category', categoryRouter)
router.use('/food', foodRouter)

module.exports = router

// brand = category
// type = restaurant