import axios from 'axios';

export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const EDIT_CHARACTER  = 'EDIT_CHARACTER';
export const DELETE_CHARACTER = 'DELETE_CHARACTER';
export const SORT_BY = 'SORT_BY';
const ROOT = 'http://127.0.0.1:8080/';


export function fetchCharacters() {
    return {
        type: FETCH_CHARACTERS,
        payload: axios.get(`${ROOT}characters`)
    };
}

export function editCharacter(character) {
    return {
        type: EDIT_CHARACTER,
        payload: axios.post(`${ROOT}character`, character)
    };
}

export function deleteCharacter(character) {
    return {
        type: DELETE_CHARACTER,
        payload: axios.delete(`${ROOT}character/${character.id}`)
    };
}

export function sortBy(sort) {
    return {
        type: SORT_BY,
        payload: sort
    };
}





