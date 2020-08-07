import React from 'react';
import TodoListAPI from '../../api/TodoListAPI';
class TodoItem extends React.Component {

    markTodoItem = event => {
        const newTodo = {
            id: this.props.id,
            status: !this.props.isMarked
        }

        TodoListAPI.updateTodoById(this.props.id, newTodo).then(response => {
            console.log(response.data);
            this.props.markTodo(this.props.id);
        })
    }

    deleteTodo = event => {
        event.stopPropagation();
        TodoListAPI.deleteTodoById(this.props.id).then(response => {
            this.props.deleteTodo(this.props.id);
        })
    }

    render() {
        return (
            <div className={"todo_item"} onClick={this.markTodoItem}>
                <span className={this.props.isMarked ? "marked" : ""}>{this.props.value}</span>
                <span style={{ cursor: "pointer" }} onClick={this.deleteTodo}>×</span>
            </div>
        );
    }

}
export default TodoItem