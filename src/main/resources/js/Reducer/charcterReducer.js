import { FETCH_CHARACTERS, EDIT_CHARACTER, DELETE_CHARACTER,
         SORT_BY } from  "../action/index";
import { SORT_ASC } from '../component/ItemsHandler/ItemsHandler'
import _ from "lodash";

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_CHARACTERS :
            return [...action.payload.data];
        case EDIT_CHARACTER :
             return updateCharacter( [...state], action.payload.data);
        case DELETE_CHARACTER :
           return deleteCharacter([...state],  { id: action.payload.data });
        case SORT_BY:
            return sortCharacters([...state], action.payload);
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

function sortCharacters(characters, sort) {
    let sortedCharacters = _.sortBy(characters, character => { return character.created; });
    return sort.order === SORT_ASC ? _.reverse(sortedCharacters) : sortedCharacters;
}


