import { connect } from 'react-redux';
import { getServerMessage } from '../../actions/serverMessage';
import ServerMessage from '../presentationals/ServerMessage';

const mapStateToProps = (state) => ({
    message: state.serverMessage.message,
});
const mapStateToDispatch = (dispatch) => ({
    getServerMessage: () => dispatch(getServerMessage()),
});
export default connect(mapStateToProps, mapStateToDispatch)(ServerMessage);