import { makeAutoObservable } from "mobx";

export default class FoodStore {
  constructor() {
    this._categories = [];
    this._restaurants = [];
    this._foods = [];
    this._selectedRestaurant = [];
    this._selectedCategory = [];
    makeAutoObservable(this);
  }

  setCategories(categories) {
    this._categories = categories;
  }
  setRestaurants(restaurants) {
    this._restaurants = restaurants;
  }
  setFoods(foods) {
    this._foods = foods;
  }

  setSelectedRestaurant(restaurant) {
    this._selectedRestaurant = restaurant;
  }
  setSelectedCategory(category) {
    this._selectedCategory = category;
  }

  get categories() {
    return this._categories;
  }
  get restaurants() {
    return this._restaurants;
  }
  get foods() {
    return this._foods;
  }
  get selectedRestaurant() {
    return this._selectedRestaurant;
  }
  get selectedCategory() {
    return this._selectedCategory;
  }
}
