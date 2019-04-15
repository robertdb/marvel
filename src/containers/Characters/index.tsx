import Characters from './Characters';
import { setCharacters } from '../../store/characters/actions';
import { ApplicationState } from '../../store';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk'

/*interface State {
    // Local State Component
}*/

interface OwnProps {
    // Own Props
}

interface DispatchProps {
    setCharacters: () => void
}

interface StateProps {
    characters: Array<any>,
    fetchingCharacter: boolean
}
export type Props = StateProps & OwnProps & DispatchProps;


export function mapStateToProps({ characters }: ApplicationState) {
    return {
        characters: characters.characters,
        fetchingCharacter: characters.isFetching
    };
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>, ownProps: OwnProps): DispatchProps => {
    return {
        setCharacters: () => dispatch(setCharacters())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters);