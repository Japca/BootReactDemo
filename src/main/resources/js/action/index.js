import axios from "axios";

export const FETCH_CHARACTERS = "FETCH_CHARACTERS";
export const EDIT_CHARACTER  = "EDIT_CHARACTER";
export const DELETE_CHARACTER = "DELETE_CHARACTER";
export const CREATE_CHARACTER = "ADD_CHARACTER";

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

export function deleteCharacter(character) {
    return {
        type: DELETE_CHARACTER,
        payload: axios.delete(`http://localhost:8080/character/${character.id}`)
    };
}

export function createCharacter(character) {
    return {
        type: CREATE_CHARACTER,
        payload: axios.put("http://localhost:8080/character", character)
    };
}


