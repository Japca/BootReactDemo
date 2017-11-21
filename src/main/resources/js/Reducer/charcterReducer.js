import { FETCH_CHARACTERS, EDIT_CHARACTER, DELETE_CHARACTER,
         SORT_BY } from  '../action/index'
import {SORT_DESC} from '../container/ItemsHandler/ItemsHandler'

import { sortBy , reverse, mapKeys, omit, values } from 'lodash'

const ID = 'id'

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_CHARACTERS :
            return mapKeys(action.payload.data, ID)
        case EDIT_CHARACTER :
             return  {...state, [action.payload.data.id] : action.payload.data}
        case DELETE_CHARACTER :
           return omit(state, action.payload.data)
        case SORT_BY:
            return sortCharacters(state , action.payload)
        default:
            return state
    }
}

function sortCharacters(characters, sort) {
    let sortedCharacters = sortBy(values(characters), [sort.type])
    return sort.order === SORT_DESC ? reverse(sortedCharacters) : sortedCharacters
}
