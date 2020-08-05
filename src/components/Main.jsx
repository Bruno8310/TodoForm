import React from 'react';
import TodoListContainer from '../containers/TodoListContainer';
import MarkedTodoListContainer from '../containers/MarkedTodoListContainer';
import TodoFormContainer from '../containers/TodoFormContainer';
import { HashRouter as Router, Link, Route } from 'react-router-dom';

class Main extends React.Component {

    markTodo = index => {
        this.props.markToDo(index);
    }

    deleteTodo = index => {
        this.props.removeTodo(index);
    }

    render() {
        return (

                <Router>
                    <div className={"container"}>
                        <aside>
                            <Link to="/todoListMade">
                                <div>Made</div>
                            </Link>
                            <Link to="/allTodoList">
                                <div>All</div>
                            </Link>
                        </aside>
                        <div className={"main"}>
                            <h2>Todo List</h2>
                            <TodoFormContainer />
                            <Route path="/todoListMade" component={MarkedTodoListContainer} />
                            <Route path="/allTodoList" component={TodoListContainer} />
                        </div>
                    </div>
                </Router>
        );
    }

}
export default Main