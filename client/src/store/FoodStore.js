import {makeAutoObservable} from "mobx";

export default class FoodStore {
    constructor() {
        this._categories = [
            {id: 1, name: "Напитки"},
            {id: 2, name: "Горячее"},
        ]
        this._restaurants = [
            {id: 1, name: "MacDac"},
            {id: 2, name: "Лезетли аш"},
        ]
        this._foods = [
            {id: 1, name: "pizza", price: 200, img: 'https://w-dog.ru/wallpapers/5/4/470015734244632/zharenaya-kurica-kartofel-morkov-garnir-bokal-vina-kolbaski-ovoshhi-prazdnichnyj-stol.jpg', description: "info food"},
            {id: 2, name: "pizza", price: 200, img: 'https://w-dog.ru/wallpapers/5/4/470015734244632/zharenaya-kurica-kartofel-morkov-garnir-bokal-vina-kolbaski-ovoshhi-prazdnichnyj-stol.jpg', description: "info food"},
            {id: 3, name: "pizza", price: 200, img: 'https://w-dog.ru/wallpapers/5/4/470015734244632/zharenaya-kurica-kartofel-morkov-garnir-bokal-vina-kolbaski-ovoshhi-prazdnichnyj-stol.jpg', description: "info food"},
            {id: 4, name: "pizza", price: 200, img: 'https://w-dog.ru/wallpapers/5/4/470015734244632/zharenaya-kurica-kartofel-morkov-garnir-bokal-vina-kolbaski-ovoshhi-prazdnichnyj-stol.jpg', description: "info food"},

        ]
        makeAutoObservable(this)
    }

    setCategories(categories) {
        this._categories = categories
    }
    setrestaurants(restaurants) {
        this._restaurants = restaurants
    }
    setfoods(foods) {
        this._foods = foods
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
}