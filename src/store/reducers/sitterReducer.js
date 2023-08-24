const initialState = {
    sitters: [],
    sitter: null,
};

const sitterReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_SITTER':
            return {
                ...state,
                sitter: {...action.payload},
            };
        case 'FETCH_SITTERS': 
            return {
                ...state,
                sitters: action.payload,
            };
        case 'ASSIGN_COMMENT':
            return {
                ...state,
                sitter: {
                    ...state.sitter,
                    comments: [...state.sitter.comments, {
                        id: action.payload.id,
                        comment: action.payload.comment,
                        rating: action.payload.rating,
                    }]
                },
            };
        default:
            return state;
    }
};

export default sitterReducer;