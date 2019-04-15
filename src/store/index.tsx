import { combineReducers, Reducer } from 'redux';

// Import your state types and reducers here.
import { CharactersReducer, characters } from './characters/reducer';

// The top-level state object
export interface ApplicationState {
    characters: CharactersReducer
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
    characters
})