import * as React from 'react';
//import { ItemProps } from './';
import {
    ContainerCharacter,
    TitleCharacter,
    DescriptionCharacter,
    ImageCharacter
} from './style';

const ItemCharacter = ({ item }: any) => {
    const { name, description, thumbnail } = item;
    return (
        <ContainerCharacter>
            <TitleCharacter>
                {name}
            </TitleCharacter>
            <DescriptionCharacter>
                {description.replace(/<(?:.|\n)*?>/gm, '')}
            </DescriptionCharacter>
            <ImageCharacter
                src={`${thumbnail.path}.${thumbnail.extension}`}
                alt="character"
            />
        </ContainerCharacter>
    )
}

export default ItemCharacter;

// helpers

