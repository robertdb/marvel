import * as React from 'react';
import { Props, ItemProps } from './';

import {
    ContainerCharacters,
    ContainerCharacter,
    TitleCharacter,
    ImageCharacter
} from './style';

const Characters = ({ characters }: Props) => {
    return (
        <ContainerCharacters>
            {characters.map((character: ItemProps) => {
                const { id, name, thumbnail } = character;
                return (
                    <React.Fragment key={id}>
                        <ContainerCharacter>
                            <TitleCharacter>
                                {name}
                            </TitleCharacter>
                            <ImageCharacter
                                src={`${thumbnail.path}.${thumbnail.extension}`}
                                alt="character"
                            />
                        </ContainerCharacter>
                    </React.Fragment>
                )

            })}
        </ContainerCharacters>
    );
}

export default Characters;

// helpers

