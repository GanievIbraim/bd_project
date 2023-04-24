import { $authHost, $host } from "./index";

export const createRestaurant = async (restaurant) => {
  const { data } = await $authHost.post("/api/restaurant", restaurant);
  return data;
};

export const fetchRestaurants = async () => {
  const { data } = await $host.get("/api/restaurant");
  return data;
};

export const createCategory = async (category) => {
  const { data } = await $authHost.post("/api/category", category);
  return data;
};

export const fetchCategories = async () => {
  const { data } = await $host.get("/api/category");
  return data;
};

export const createFood = async (food) => {
  const { data } = await $authHost.post("/api/food", food);
  return data;
};

export const fetchFoods = async (restaurantId, categoryId, page, limit= 5) => {
  const {data} = await $host.get('api/food', {params: {
    restaurantId, categoryId, page, limit
      }})
  return data
}

export const fetchOneFood = async (id) => {
  const { data } = await $host.get("/api/food/" + id);
  return data;
};

