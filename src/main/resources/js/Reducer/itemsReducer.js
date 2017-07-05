import { FETCH_ITEMS } from  "../action/index";

export const loadItems = (state = [], action) => {
    switch (action.type) {
        case FETCH_ITEMS :
            return [...action.payload.data];
        default:
            return state;
    }
};


