import {combineReducers} from 'redux'
import CharacterReducer from './charcterReducer.js'
import { reducer as formReducer} from 'redux-form'

export const reducers = combineReducers({
    characters: CharacterReducer,
    form: formReducer
})

function d() {

    console.info('ddggh')
}