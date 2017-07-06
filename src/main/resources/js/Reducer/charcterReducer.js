import { FETCH_CHARACTERS, EDIT_CHARACTER } from  "../action/index";

export default function (state = [], action) {
    debugger;
    switch (action.type) {
        case FETCH_CHARACTERS :
            return [...action.payload.data];
         case EDIT_CHARACTER : return [...state,  ...action.payload.data];
        default:
            return state;
    }
};


