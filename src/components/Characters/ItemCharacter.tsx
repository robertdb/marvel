import * as React from 'react';
import { ItemProps } from './';
import {
    ContainerCharacter,
    TitleCharacter,
    ImageCharacter
} from './style';

const ItemCharacter = (props: ItemProps) => {
    const { name, thumbnail } = props;
    console.log('character', typeof props);
    return (
        <ContainerCharacter>
            <TitleCharacter>
                {name}
            </TitleCharacter>
            <ImageCharacter
                src={`${thumbnail.path}.${thumbnail.extension}`}
                alt="character"
            />
        </ContainerCharacter>
    )
}

export default ItemCharacter;

// helpers

