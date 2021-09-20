import axios from "axios";
import settings from "./settings";

const { API_URL } = settings;

const getAllCategories = () => {
    return axios.get(`${API_URL}/category/get-all`);
}

const deleteCategory = (id) => {
    return axios.post(`${API_URL}/category/delete`, {
        id
    });
}

const getCategory = (id) => {
    return axios.post(`${API_URL}/category/category-details`, { id });
}

const getAllParentCategories = () => {
    return axios.get(`${API_URL}/category/get-all-parent-categories`);
}

export { getAllCategories, deleteCategory, getCategory, getAllParentCategories };
