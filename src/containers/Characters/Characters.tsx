import * as React from 'react';
const { useEffect } = React;

import { Props } from './';

const Characters = ({ characters, setCharacters, fetchingCharacter, error }: Props) => {
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
    return (
        <div>
            {characters.map((character) => {
                <div>
                    <h1>{character.title}</h1>
                </div>
            })}
        </div>
    );
}

export default Characters;

// helpers

