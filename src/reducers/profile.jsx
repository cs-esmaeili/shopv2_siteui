export const tokenReducer = (state = null, action) => {
    switch (action.type) {
        case "SETTOKEN":
            return action.payload;
        default:
            return state;
    }
};
export const CartReducer = (state = [], action) => {
    switch (action.type) {
        case "SETPCARTDATA":
            return action.payload;
        default:
            return state;
    }
};
export const needLoadPageReducer = (state = null, action) => {
    switch (action.type) {
        case "SETNEEDLOADPAGE":
            return action.payload;
        default:
            return state;
    }
};
