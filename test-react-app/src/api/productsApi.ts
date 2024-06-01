import React from 'react'
import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://makeup-api.herokuapp.com/api/v1/products.json?'
});


export const productsAPI = {
    popular() {
        return instance.get('rating_greater_than=2.5&rating_less_than=3.5').then(res => res.data)
    },
    newArrival() {
        return instance.get('rating_greater_than=3.8&rating_less_than=4.1').then(res => res.data)
    },
    featured() {
        return instance.get('brand=maybelline&rating_greater_than=3.9&rating_less_than=4.1').then(res => res.data)
    }
}