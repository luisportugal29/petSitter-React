import axios from '../../config/axiosInstance';
import { SITTERS_URL } from '../../config/apiConfig';

export const searchSitters = (query) => async(dispatch) => {
    try {
        const { data : sitters } = await axios.get(SITTERS_URL, { params : { name: query }});

        dispatch({
            type: 'SEARCH',
            payload: sitters,
        });
    } catch(error) {

    }
};

export const clearSitterSearch = () => ({ type: 'CLEAR_SEARCH', payload: []});
