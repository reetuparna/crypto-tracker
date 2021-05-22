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
    const data_7d=updatedDataForId.data_7d;
    let newCardData = [];
    Object.assign(newCardData,oldCardData);
    const found = newCardData.find(obj=>obj.id==id);

    if(found != undefined){
        found.data_7d = data_7d;
    } else {
        newCardData.push({
            id: id,
            data_7d: data_7d,
        });
    }
    return newCardData;
}

export default rootReducer;