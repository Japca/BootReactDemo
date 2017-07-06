import { FETCH_CHARACTERS, EDIT_CHARACTER } from  "../action/index";
import _ from "lodash";

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_CHARACTERS :
            return [...action.payload.data];
        case EDIT_CHARACTER :
             return updateCharacters(state, action);
        default:
            return state;
    }
};

function updateCharacters(state, action) {
    let newState = [...state];
    let editedCharacter = action.payload.data;
    let index = _.findIndex(newState, { id : editedCharacter.id });
    newState.splice(index, 1, editedCharacter);
    return newState;
}


