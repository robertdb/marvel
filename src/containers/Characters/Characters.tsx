import * as React from 'react';
import { Props } from './';
import Characters from '../../components/Characters';
import SearchCharacters from '../../components/SearchCharacters';
import Lottie from 'react-lottie';
import batman from '../../assets/lotties/batman.json';
import hulk from '../../assets/images/hulk.jpg';

import {
    Container,
    Loading,
    ImageLoading,
    LoadingMessage
} from './style';
const { useEffect } = React;

const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: batman,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

const CharactersWrapper = ({
    characters,
    setCharacters,
    fetchingCharacter,
    error,
    updateSearchableCharacter,
    name
}: Props) => {
    useEffect(() => {
        if (fetchingCharacter === null) {
            setCharacters('');
        }
    });
    console.log(characters.length);
    return (
        <Container>
            <SearchCharacters
                onChange={updateSearchableCharacter}
                name={name}
            />
            {(fetchingCharacter || fetchingCharacter == null ) ?
                <Loading>
                    <Lottie
                        options={defaultOptions}
                        height={300}
                        width={300}
                    />
                    <LoadingMessage>Ups! This is not DC ...</LoadingMessage>
                </Loading>
                    :
                    error?
                <div style={{ color: 'red' }}>{error}</div>:
                characters.length == 0 ?
                <Loading>
                    <ImageLoading src={hulk} alt="no-result"/>
                    <LoadingMessage>Type better!!</LoadingMessage>
                </Loading>
                :
                <Characters
                        characters={characters}
                    />
                    }
                    
        </Container>
    );
}

export default CharactersWrapper;

// helpers
        
