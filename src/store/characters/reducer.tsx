import { CharacterActions } from './types';
import { SET_CHARACTERS, FETCHING_CHARACTERS } from './types';


// States' definition
export interface CharactersReducer {
    isFetching: boolean | null;
    characters: Array<any>
}

const initialState: CharactersReducer = {
    isFetching: null,
    characters: []
}

export const characters = (state: CharactersReducer = initialState, action: CharacterActions): CharactersReducer => {
    switch (action.type) {
        case SET_CHARACTERS:
            return { ...state, characters: action.payload.characters }
        case FETCHING_CHARACTERS:
            return { ...state, isFetching: action.payload.fetching }
    }
    return state
}
