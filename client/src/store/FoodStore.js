import { makeAutoObservable } from "mobx";

export default class FoodStore {
    constructor() {
        this._categories = [
            { id: 1, name: "Напитки" },
            { id: 2, name: "Горячее" },
        ]
        this._restaurants = [
            { id: 1, name: "MacDac" },
            { id: 2, name: "Лезетли аш" },
        ]
        this._foods = [
            { id: 1, name: "pizza", price: 200, img: 'https://w-dog.ru/wallpapers/5/4/470015734244632/zharenaya-kurica-kartofel-morkov-garnir-bokal-vina-kolbaski-ovoshhi-prazdnichnyj-stol.jpg', description: "info food" },
            { id: 2, name: "pizza", price: 200, img: 'https://w-dog.ru/wallpapers/5/4/470015734244632/zharenaya-kurica-kartofel-morkov-garnir-bokal-vina-kolbaski-ovoshhi-prazdnichnyj-stol.jpg', description: "info food" },
            { id: 3, name: "pizza", price: 200, img: 'https://w-dog.ru/wallpapers/5/4/470015734244632/zharenaya-kurica-kartofel-morkov-garnir-bokal-vina-kolbaski-ovoshhi-prazdnichnyj-stol.jpg', description: "info food" },
            { id: 4, name: "pizza", price: 200, img: 'https://w-dog.ru/wallpapers/5/4/470015734244632/zharenaya-kurica-kartofel-morkov-garnir-bokal-vina-kolbaski-ovoshhi-prazdnichnyj-stol.jpg', description: "info food" },

        ]
        this._selectedRestaurant = []
        this._selectedCategory = []
        makeAutoObservable(this)
    }

    setCategories(categories) {
        this._categories = categories
    }
    setRestaurants(restaurants) {
        this._restaurants = restaurants
    }
    setFoods(foods) {
        this._foods = foods
    }

    setSelectedRestaurant(restaurant) {
        this._selectedRestaurant = restaurant
    }
    setSelectedCategory(category) {
        this._selectedCategory = category
    }

    get categories() {
        return this._categories
    }
    get restaurants() {
        return this._restaurants
    }
    get foods() {
        return this._foods
    }
    get selectedRestaurant() {
        return this._selectedRestaurant
    }
    get selectedCategory() {
        return this._selectedCategory
    }
}