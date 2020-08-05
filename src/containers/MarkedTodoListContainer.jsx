import { connect } from 'react-redux';
import TodoList from '../components/TodoList/TodoList';


const mapStateToProps = state => {
    return {
        todoList: state.todoList.filter(item => { item.status === true })
    }
}

const mapDispatchToProps = dispatch => {
    return {
        markToDo:  (id, todo) => {
            dispatch({
                type: "MARK_TODO",
                id: id,
                todo: todo
            })
        },
        removeTodo:  id => {
            dispatch({
                type: "REMOVE_TODO",
                id: id
            })
        },

        initTodo: todo => {
            dispatch({
                type: "INIT_TODO",
                todo: todo
            });
            // dispatch(INIT_TODO(todo))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);