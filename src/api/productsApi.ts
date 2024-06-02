import axios from "axios";
import { Product, ProductSchema } from "./types";

export const instance = axios.create({
  baseURL: "http://makeup-api.herokuapp.com/api/v1/products.json?",
});

export const productsAPI = {
  popular(): Promise<Product[]> {
    return instance
      .get("rating_greater_than=2.5&rating_less_than=3.5")
      .then((res) => ProductSchema.array().parse(res.data))
      .catch(() => []);
  },
  newArrival() {
    return instance
      .get("rating_greater_than=3.8&rating_less_than=4.1")
      .then((res) => res.data)
      .catch(() => []);
  },
  featured() {
    return instance
      .get("brand=maybelline&rating_greater_than=3.9&rating_less_than=4.1")
      .then((res) => res.data)
      .catch(() => []);
  },
};
