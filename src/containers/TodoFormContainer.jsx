import { connect } from 'react-redux';
import TodoForm from '../components/TodoForm/TodoForm';
import { ADD_TODO } from '../actions';
import TodoListAPI from '../api/TodoListAPI';

const mapDispatchToProps = dispatch => {
    return {
        addTodo: todo => {
            dispatch({
                type: "ADD_TODO",
                todo: todo
            })
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(TodoForm);