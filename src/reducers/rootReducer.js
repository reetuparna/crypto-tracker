const initialState = {
    test: 'Click Here',
    coins: [],
    currency: 'INR',
    page: 1

};

const rootReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'TEST':
            return { ...state, test: action.value };
        case 'UPDATE_COINS':
            return { ...state, coins: action.value };
        case 'CURRENCY_UPDATED':
            return { ...state, currency: action.value };
        case 'PAGE_UPDATED':
            return { ...state, page: action.value };
        default:
            return state;
    }
}

export default rootReducer;