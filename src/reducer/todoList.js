let todos = [];

const todoList = (state = todos, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.todo];
        case "INIT_TODO":
            return action.todo;
            
        case "MARK_TODO":
            state.forEach(item => {
                if (item.id === action.id) {
                    item.status = !item.status;
                }
            })
            return [...state]

        case "REMOVE_TODO":
            return [...state.filter(item => item.id !== action.id)];

        case "INIT_MARKED_TODO":
            return [...state.filter(item => item.status === true)];
        default:
            return state;
    }
}

export default todoList

