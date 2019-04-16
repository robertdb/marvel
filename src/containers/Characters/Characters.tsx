import * as React from 'react';
import { Props } from './';
import Characters from '../../components/Characters';
import {
    Container,
} from './style';
const { useEffect } = React;
const CharactersWrapper = ({ characters, setCharacters, fetchingCharacter, error }: Props) => {
    useEffect(() => {
        if (fetchingCharacter === null) {
            setCharacters();
        }

    });
    if (fetchingCharacter || fetchingCharacter === null) {
        return <div>Loading Characters!!</div>
    }
    if (error) {
        return <div style={{ color: 'red' }}>{error}</div>
    }
    console.log(characters.length);
    return (
        <Container>
            <Characters characters={characters} />
        </Container>
    );
}

export default CharactersWrapper;

// helpers

