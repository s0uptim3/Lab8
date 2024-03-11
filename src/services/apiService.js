import axios from "axios";

const BASE_URL = "https://dummyjson.com/products";
export const fetchProducts = async () => {
	try {
		const response = await axios.get(BASE_URL);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const getProductDetails = async (id) => {
	try {
		const response = await axios.get(`${BASE_URL}/${id}`);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const removeProducts = async (id) => {
	try {
		const response = await axios.delete(`${BASE_URL}/${id}`);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const addProduct = (product) => {
	return axios.post(`${BASE_URL}/add`, JSON.stringify(product));
};

export const editProduct = (id, product) => {
	axios.put(`${BASE_URL}/${id}`, JSON.stringify(product));
};
