import axios from "axios";

// Set the base url for API
const BASE_URL = "https://youstore.thelastresort.com.pk/api";

// Create an instance of axios
const apiClient = axios.create({
  baseURL: BASE_URL,
  "Content-Type": "application/json",
  Accept: "application/json",
});

// GET request
export const get = async (endpoint = {}) => {
  try {
    const response = await apiClient.get(endpoint, { params });
    console.log("response in api service", response.data);
    return response.data;
  } catch (error) {
    // throw handleError(error);
    console.log("GET Error:", error.response?.data || error.message);
  }
};

export const post = async (endpoint, data = {}) => {
  console.log("data in api service", endpoint, data);
  try {
    const response = await apiClient.post(endpoint, data);
    console.log("response in api service", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    // console.log("POST Error:", error.response?.data || error.message);
  }
};

// PATCH request
export const patch = async (endpoint, data = {}) => {
  try {
    const response = await apiClient.patch(endpoint, data);
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};

// DELETE request
export const del = async (endpoint) => {
  try {
    const response = await apiClient.delete(endpoint);
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};
