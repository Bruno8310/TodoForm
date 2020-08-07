import { connect } from 'react-redux';
import MarkTodoList from '../components/MarkedTodoList/MarkTodoList';


const mapStateToProps = state => {
    return {
        // todoList: state.todoList.filter(item => { item.status === true })
        todoList: state.todoList
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

        init_marked_todo: todo => {
            dispatch({
                type: "INIT_MARKED_TODO",
                todo: todo
            });
            // dispatch(INIT_TODO(todo))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MarkTodoList);