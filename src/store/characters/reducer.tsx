import { CharacterActions } from './types';
import { SET_CHARACTERS, FETCHING_CHARACTERS, ERROR_CHARATERS_REQUEST } from './types';

const errorRequestMessage = 'Awkward situation. Api marvel is not working';

// States' definition
export interface CharactersReducer {
    isFetching: boolean | null;
    characters: Array<any>,
    error: null | string;
}

const initialState: CharactersReducer = {
    isFetching: null,
    characters: [],
    error: null
}

export const characters = (state: CharactersReducer = initialState, action: CharacterActions): CharactersReducer => {
    switch (action.type) {
        case SET_CHARACTERS:
            return { ...state, characters: action.payload.characters }
        case FETCHING_CHARACTERS:
            return { ...state, isFetching: action.payload.fetching }
        case ERROR_CHARATERS_REQUEST:
            return { ...state, error: errorRequestMessage }
    }
    return state
}
