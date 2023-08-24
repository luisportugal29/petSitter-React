
const initialState = {
    results: [],
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH':
            return {
                ...state,
                results: action.payload,
            };
        case 'CLEAR_SEARCH': 
            return {
                ...state,
                results: action.payload,
            };
        default:
            return state;
    }
};

export default searchReducer;