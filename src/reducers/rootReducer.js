const initialState = {
    test: 'Click Here',
    coins: [],
    currency: 'INR',
    page: 1,
    cardData : []
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
        case 'SPARKLINE_UPDATED':
            
            return {...state, cardData: updateSparklineForId(state.cardData, action.value) }
        default:
            return state;
    }
}

function updateSparklineForId(oldCardData, updatedDataForId){

    const id=updatedDataForId.id;
    const prices=updatedDataForId.prices;
    let newCardData = [];
    Object.assign(newCardData,oldCardData);

    if(newCardData.includes(id)){
        newCardData[id].prices = prices;
    } else {
        newCardData.push({
            id: id,
            prices: prices,
        });
    }
    
    return newCardData;
}

export default rootReducer;