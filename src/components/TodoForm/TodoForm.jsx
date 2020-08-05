import React from 'react';
import TodoListAPI from '../../api/TodoListAPI';
class TodoForm extends React.Component {

    constructor() {
        super();

        this.state = {
            inputValue: "",
        }
    }

    handleInput = (event) => {
        this.setState({
            inputValue: event.target.value,
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        if(this.state.inputValue === "") {
            alert("Please input todo list valid.");
            return;
        } 

        let todo = {
            content: this.state.inputValue,
            status: false
        }

        this.setState({
            inputValue: "",
        });

        TodoListAPI.createTodo(todo).then(response => {
            console.log(response.data);
            this.props.addTodo(response.data);
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" className="todo_input" value={this.state.inputValue} onChange={this.handleInput} placeholder="Input a new todo here..." />
                <button type="submit" className="button">add</button>
            </form>

        );
    }

}
export default TodoForm