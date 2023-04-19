const sequelize = require('../db')
const {
    DataTypes
} = require('sequelize')

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: "USER"
    },
    name: {
        type: DataTypes.STRING
    },
    surname: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    num_tel: {
        type: DataTypes.STRING
    },
})

const Order = sequelize.define('order', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
})

const OrderFood = sequelize.define('order_food', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
})

const Food = sequelize.define('food', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false
    },
})

const Category = sequelize.define('category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
})

const Restaurant = sequelize.define('restaurant', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
})

const RestaurantCategory = sequelize.define('restaurant_category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
})


User.hasOne(Order)
Order.belongsTo(User)

Order.hasMany(OrderFood)
OrderFood.belongsTo(Order)

Restaurant.hasMany(Food)
Food.belongsTo(Restaurant)

Category.hasMany(Food)
Food.belongsTo(Category)

Food.hasMany(OrderFood)
OrderFood.belongsTo(Food)


Restaurant.belongsToMany(Category, {
    through: RestaurantCategory
})
Category.belongsToMany(Restaurant, {
    through: RestaurantCategory
})

module.exports = {
    User,
    Order,
    OrderFood,
    Food,
    Restaurant,
    Category,
    RestaurantCategory,
}