import SearchCharacters from './SearchCharacters';

export interface Props {
    name: string,
    onChange: (name: string) => void
}

export default SearchCharacters;