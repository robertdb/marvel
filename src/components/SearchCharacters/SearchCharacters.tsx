import * as React from 'react';
import {
    Props
} from './';
import {
    Form,
    InputSearch,
    Title
} from './style';

const SearchCharacters = ({ name, onChange }: Props) => {
    return (
        <Form>
            <Title>Find your character!</Title>
            <InputSearch
                type="text"
                value={name}
                onChange={(e) => onChange(e.target.value)}
            />
        </Form>
    )
}

export default SearchCharacters;