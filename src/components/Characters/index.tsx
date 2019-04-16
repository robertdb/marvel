import Characters from './Characters';
import {ICharacter} from '../../containers/Characters';


export interface ItemProps extends ICharacter{
}
export interface Props {
    characters: Array<ItemProps>,
}

export default Characters;