const initialState = {
    test: 'Click Here',
};

const rootReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'TEST':
            return { test: action.value };
        default:
            return state;
    }
}

export default rootReducer;