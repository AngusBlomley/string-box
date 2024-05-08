export const loginUser = (userData) => async (dispatch) => {
    try {
        const response = await axios.post('/api/login', userData);
        if (response.data) {
            dispatch({
                type: 'USER_LOGIN_SUCCESS',
                payload: response.data
            });
        }
    } catch (error) {
        dispatch({
            type: 'USER_LOGIN_FAILURE',
            payload: error.response.data
        });
    }
};

export const logoutUser = () => {
    return {
        type: 'USER_LOGOUT'
    };
};
