import * as React from 'react';
import { Props, ItemProps } from './';
import ItemCharacter from './ItemCharacter';
import {
    ContainerCharacters,
} from './style';

const Characters = ({ characters }: Props) => {
    return (
        <ContainerCharacters>
            {characters.map((character: ItemProps) => {
                const { id } = character;
                return (
                    <React.Fragment key={id}>
                        <ItemCharacter item={character} />
                    </React.Fragment>
                )

            })}
        </ContainerCharacters>
    );
}

export default Characters;

// helpers

