import React from 'react'
import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

export const testimonialsAPI = () => {
    return instance.get('photos?_start=0&_limit=5').then(res => res.data)
}
