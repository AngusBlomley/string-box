import axios from 'axios';

const API_URL = '/api';

// Login function
const login = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Failed to log in');
    }
};

// Fetch user details
const fetchUserDetails = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/user/${userId}`);
        console.log(userId)
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Failed to fetch user details');
    }
};

// Update user details
const updateUserDetails = async (userData) => {
    try {
        const response = await axios.put(`${API_URL}/user/${userData.id}`, userData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Failed to update user details');
    }
};

// Consolidating all service functions into a single object
const authService = {
    login,
    fetchUserDetails,
    updateUserDetails,
};

export default authService;
