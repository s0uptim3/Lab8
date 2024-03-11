import axios from 'axios';

const BASE_URL = 'https://dummujson.com/products';
export const fetchProducts= async () => {
    try{
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getProductDetails = async (id) => {

}

export const removeProducts= async (id) => {
    try{
        const response = await axios.delete(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const