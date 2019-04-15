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
    SET_CHARACTERS,
    FETCHING_CHARACTERS
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

// thunk action
export const setCharacters = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    // Invoke API
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        dispatch(fetchingCharactersCreator(true));
        try {
            const data = await fetchCharacters();
            if (data.status == "Ok") {
                dispatch(setCharactersCreator(data.data.results));
            }
            dispatch(fetchingCharactersCreator(false));
        } catch (error) {
            console.log("Awkward situation, api marvel not working");
        }
    }
}