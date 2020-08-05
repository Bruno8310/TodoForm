import axios from "axios";

const TODO_LIST_API_URL = "https://5e9ec500fb467500166c4658.mockapi.io/todos"

class TodoListAPI {

    static getAllTodos() {
        let response = axios.get(TODO_LIST_API_URL);
        return response;
    }

    static updateTodoById(id, todo) {
        let response = axios.put(`${TODO_LIST_API_URL}/${id}`, todo);
        return response;
    }

    static createTodo(todo) {
        let response = axios.post(TODO_LIST_API_URL, todo);
        return response;
    }

    static deleteTodoById(id) {
        let response = axios.delete(`${TODO_LIST_API_URL}/${id}`);
        return response;
    }
    
}

export default TodoListAPI;