import axios from "axios";

export const fetchAllProducts = () =>
  axios
    .get(
      "http://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=4.5"
    )
    .then((res) => res.data)
    .catch(() => []);
