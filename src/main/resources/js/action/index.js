import axios from "axios";
import { reducer as formReducer} from "redux"

export const FETCH_CHARACTERS = "FETCH_CHARACTERS";
export const EDIT_CHARACTER  = "EDIT_ITEM";

export function fetchCharacters() {
    return {
        type: FETCH_CHARACTERS,
        payload: axios.get('http://localhost:8080/characters')
    };
}

export function editCharacter(character) {
    return {
        type: EDIT_CHARACTER,
        payload: axios.post("http://localhost:8080/character", character)
    };
}

