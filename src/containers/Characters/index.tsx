import Characters from './Characters';
import { setCharacters, updateSearchableCharacter } from '../../store/characters/actions';
import { ApplicationState } from '../../store';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk'

/*interface State {
    // Local State Component
}*/

interface ICharacterThumbnail {
    path: string,
    extension: string
}
interface ICharacterComicsItem {
    resourceURI: string,
    name: string
}
interface ICharacterComics {
    available: number,
    collectionURI: string,
    items: Array<ICharacterComicsItem>,
    returned: number
}

interface ICharacterSeriesItem {
    resourceURI: string,
    name: string
}

interface ICharacterSeries {
    available: number,
    collectionURI: string,
    items: Array<ICharacterSeriesItem>,
    returned: number
}

interface ICharacterStoriesItem {
    resourceURI: string,
    name: string,
    type: string
}

interface ICharacterStories {
    available: number,
    collectionURI: string,
    items: Array<ICharacterStoriesItem>,
    returned: number
}

interface ICharacterEventsItem {
    resourceURI: string,
    name: string
}

interface ICharacterEvents {
    available: number,
    collectionURI: string,
    items: Array<ICharacterEventsItem>,
    returned: 1
}

interface ICharacterUrl {
    type: string,
    url: string
}


export interface ICharacter {
    id: number,
    name: string,
    description: string,
    modified: string,
    thumbnail: ICharacterThumbnail,
    resourceURI: string,
    comics: ICharacterComics,
    series: ICharacterSeries,
    stories: ICharacterStories,
    events: ICharacterEvents,
    urls: Array<ICharacterUrl>
}

interface OwnProps {

}

interface DispatchProps {
    setCharacters: (name: string) => void,
    updateSearchableCharacter: (name: string) => void
}


interface StateProps {
    characters: Array<ICharacter>,
    fetchingCharacter: boolean,
    error: null | string,
    name: string
}
export type Props = StateProps & OwnProps & DispatchProps;


export function mapStateToProps({ characters }: ApplicationState) {
    return {
        characters: characters.characters,
        fetchingCharacter: characters.isFetching,
        error: characters.error,
        name: characters.name
    };
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>, ownProps: OwnProps): DispatchProps => {
    return {
        setCharacters: (name: string) => dispatch(setCharacters(name)),
        updateSearchableCharacter: (name: string) => dispatch(updateSearchableCharacter(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters);