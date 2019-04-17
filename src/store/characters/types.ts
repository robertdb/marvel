import { Action } from 'redux'

// Declare our action types using our interface. For a better debugging experience,
// I use the `@@context/ACTION_TYPE` convention for naming action types.
export const SET_CHARACTERS = '@@character/SET_CHARACTERS';
export type SET_CHARACTERS = typeof SET_CHARACTERS;

export const FETCHING_CHARACTERS = '@@character/FETCHING_CHARACTERS';
export type FETCHING_CHARACTERS = typeof FETCHING_CHARACTERS;


export const ERROR_CHARATERS_REQUEST = '@@character/ERROR_CHARATERS_REQUEST';
export type ERROR_CHARATERS_REQUEST = typeof ERROR_CHARATERS_REQUEST;

export const UPDATE_SEARCHABLE_CHARACTER = '@@character/UPDATE_SEARCHABLE_CHARACTER';
export type UPDATE_SEARCHABLE_CHARACTER = typeof UPDATE_SEARCHABLE_CHARACTER;

// Our character-level state object
// ...

export interface IsetCharacters extends Action {
    type: SET_CHARACTERS,
    payload: {
        characters: Array<any>
    }
}

export interface IupdateSearchableCharacter extends Action {
    type: UPDATE_SEARCHABLE_CHARACTER,
    payload: {
        name: string
    }
}

export interface IfetchingCharacters extends Action {
    type: FETCHING_CHARACTERS,
    payload: {
        fetching: boolean | null
    }
}

export interface IErrorCharacterRequest extends Action {
    type: ERROR_CHARATERS_REQUEST
}

// Down here, we'll create a discriminated union type of all actions which will be used for our reducer.
export type CharacterActions = IsetCharacters | 
                            IfetchingCharacters | 
                            IErrorCharacterRequest | 
                            IupdateSearchableCharacter  ;