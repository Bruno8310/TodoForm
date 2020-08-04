import { connect } from 'react-redux';
import TodoForm from '../components/TodoForm';
import { ADD_TODO } from '../actions';

const mapDispatchToProps = dispatch => ({
    addTodo: text => {
        console.log(ADD_TODO(text))
        dispatch(ADD_TODO(text));
    }
})

export default connect(
    null,
    mapDispatchToProps
)(TodoForm);