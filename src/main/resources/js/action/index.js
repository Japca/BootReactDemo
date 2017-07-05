import axios from "axios";

export const FETCH_ITEMS = "ITEMS";
export const EDIT_ITEM  = "EDIT_ITEM";

export function fetchItems() {
    return {
        type: FETCH_ITEMS,
        payload: axios.get('http://localhost:8080/items')
    };
}

export function editItem(item) {
    return {
        type: EDIT_ITEM,
        payload: axios.post(`http://localhost:8080/item/${item.id}`)
    };
}

