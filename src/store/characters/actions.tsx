import {
    ActionCreator,
    AnyAction
} from 'redux';

import {
    ThunkAction,
    ThunkDispatch
} from 'redux-thunk';

import {
    IsetCharacters,
    IfetchingCharacters,
    IErrorCharacterRequest,
    IupdateSearchableCharacter,
    SET_CHARACTERS,
    FETCHING_CHARACTERS,
    ERROR_CHARATERS_REQUEST,
    UPDATE_SEARCHABLE_CHARACTER
} from './types';

import { fetchCharacters } from '../../services/characters';

// Type these action creators with `: ActionCreator<ActionTypeYouWantToPass>`.
// Remember, you can also pass parameters into an action creator. Make sure to
// type them properly.
export const setCharactersCreator: ActionCreator<IsetCharacters> = (characters: Array<any>) => ({
    type: SET_CHARACTERS,
    payload: {
        characters
    }
})
export const fetchingCharactersCreator: ActionCreator<IfetchingCharacters> = (fetching: boolean) => ({
    type: FETCHING_CHARACTERS,
    payload: {
        fetching
    }
})
export const errorCharacterRequest: ActionCreator<IErrorCharacterRequest> = () => ({
    type: ERROR_CHARATERS_REQUEST,
})

export const updateSearchableCharacterCreator: ActionCreator<IupdateSearchableCharacter> = (name: string) => ({
    type: UPDATE_SEARCHABLE_CHARACTER,
    payload: {
        name
    }
})





// THUNK ACTIONS
export const setCharacters = (name: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    // Invoke API
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        dispatch(fetchingCharactersCreator(true));
        try {
            const data = await fetchCharacters(name);
            if (data.status == "Ok") {
                dispatch(setCharactersCreator(data.data.results));
            }
            dispatch(fetchingCharactersCreator(false));
        } catch (error) {
            dispatch(fetchingCharactersCreator(false));
            dispatch(errorCharacterRequest());
            console.log('Awkward situation, api marvel not working');
        }
    }
}

export const updateSearchableCharacter = (name: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        await dispatch(updateSearchableCharacterCreator(name));
        if (name.length > 2) {
            await dispatch(setCharacters(name));
        }

    }
}