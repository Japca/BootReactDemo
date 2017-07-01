import axios from "axios";

export const ITEMS = "ITEMS";

export function fetchItems() {
    // const request = axios.get('http://localhost:8080/items');

    return {
        type: ITEMS,
        payload: axios.get('http://localhost:8080/items')
    };
}
