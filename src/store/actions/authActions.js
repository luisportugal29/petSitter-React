
import axios from '../../config/axiosInstance';
import { LOGIN_URL, SIGNUP_URL, LOGOUT_URL } from '../../config/apiConfig';

export const login = (credentials) => async (dispatch) => {
    try {
        const { data : user } = await axios.post( LOGIN_URL, credentials);

        dispatch({
            type: 'LOGIN',
            payload: user,
        });
        
    } catch(error) {

    }
};

export const signup = (userData) => async(dispatch) => {
    try {
        
        const user = await axios.post(SIGNUP_URL, userData);

        dispatch({
            type: 'SIGNUP',
            payload: user,
        });

    } catch(error) {

    }
}

export const logout = () => async(dispatch) => {
    try {
        await axios.post(LOGOUT_URL);

        dispatch({
            type: 'LOGOUT'
        });

    } catch(error) {

    }
};