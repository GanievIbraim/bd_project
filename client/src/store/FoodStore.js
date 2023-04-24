import { makeAutoObservable } from "mobx";

export default class FoodStore {
  constructor() {
    this._categories = [];
    this._restaurants = [];
    this._foods = [];
    this._selectedRestaurant = [];
    this._selectedCategory = [];
    this._page = 1;
    this._totalCount = 0;
    this._limit = 3;
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
    this.setPage(1)
    this._selectedRestaurant = restaurant;
  }
  setSelectedCategory(category) {
    this.setPage(1)
    this._selectedCategory = category;
  }
  
  setPage(page) {
    this._page = page;
  }
  setTotalCount(count) {
    this._totalCount = count;
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
  get totalCount() {
    return this._totalCount;
  }
  get page() {
    return this._page;
  }
  get limit() {
    return this._limit;
  }
}
