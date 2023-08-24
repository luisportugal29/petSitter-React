import axios from '../../config/axiosInstance';
import { GET_SITTERS, SITTERS_URL } from '../../config/apiConfig';

export const fetchSitters = () => async(dispatch) => {
    try {
        const { data: sitters } = await axios.get(GET_SITTERS);

        dispatch({
            type: 'FETCH_SITTERS',
            payload: sitters,
        });

    } catch (error) {

    }
};


export const fetchSitter = (sitterId) => async(dispatch) => {
    try {   
        const { data : sitter} = await axios.get(`/sitter/${sitterId}`);

        dispatch({
            type: 'FETCH_SITTER',
            payload: sitter,
        });

    } catch(error) {

    }
}

export const assignComment = (sitterId, body) => async(dispatch) => {
    try {
        const { data : comment } = await axios.post(`${SITTERS_URL}/${sitterId}`, body);

        dispatch({
            type: 'ASSIGN_COMMENT',
            payload: comment,
        });
    } catch(error) {

    }
}