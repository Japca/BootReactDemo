import { FETCH_CHARACTERS, EDIT_CHARACTER, DELETE_CHARACTER } from  "../action/index";
import _ from "lodash";

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_CHARACTERS :
            return [...action.payload.data];
        case EDIT_CHARACTER :
             return updateCharacter( [...state], action.payload.data);
        case DELETE_CHARACTER :
           return deleteCharacter([...state],  { id: action.payload.data });
        default:
            return state;
    }
};

function deleteCharacter(state, character) {
    let index = _.findIndex(state, { id : character.id });
    state.splice(index, 1);
    return state;
}

function updateCharacter(state, character) {
    let index = _.findIndex(state, { id : character.id });
    state.splice(index, 1, character);
    return state;
}


