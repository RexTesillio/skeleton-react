import { connect } from 'react-redux';
import { counterIncrease, counterDecrease } from '../../actions/counter';
import Counter from '../presentationals/Counter';

const mapStateToProps = (state) => ({
    number: state.counter.number,
});
const mapStateToDispatch = (dispatch) => ({
    handleClickPlus: () => dispatch(counterIncrease()),
    handleClickMinus: () => dispatch(counterDecrease())
});
export default connect(mapStateToProps, mapStateToDispatch)(Counter);