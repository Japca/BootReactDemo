import ITEMS from  "../action/index";

export const loadItems = (state = [], action) => {

    if (action.type === "ITEMS") {
         return [...action.payload.data];

    }
    return state;
};


