import axios from "axios";

export const ITEMS = "ITEMS";

export function fetchItems() {
    return {
        type: ITEMS,
        payload: axios.get('http://localhost:8080/items')
    };
}
