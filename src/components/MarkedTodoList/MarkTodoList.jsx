import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

class MarkTodoList extends React.Component {

    markTodo = id => {
        this.props.markToDo(id);
    }

    deleteTodo = id => {
        this.props.removeTodo(id);
    }

    componentDidMount() {
       this.props.init_marked_todo(this.props.todoList);
    }

    render() {
        return (
            <div className="todo_container">
                {
                    this.props.todoList.map((value, index) => <TodoItem key={index} id={value.id} isMarked={value.status} value={value.content} deleteTodo={this.deleteTodo} markTodo={this.markTodo} />)
                }
            </div>
        );
    }

}
export default MarkTodoList