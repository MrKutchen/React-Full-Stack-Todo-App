import React, {Component} from 'react';
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService.js";

class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            message: null
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
    }

    // componentWillUnmount() {
    //
    // }
    //
    // shouldComponentUpdate(nextProps, nextState) {
    //
    // }

    componentDidMount() {
        this.refreshTodos()
    }

    refreshTodos() {
        let username = AuthenticationService.getLoggedLoggedInUserName()
        TodoDataService.retrieveAllTodos(username)
            .then(
                response => {
                    // console.log(response)
                    this.setState({todos: response.data})
                }
            )
    }

    deleteTodoClicked(id) {
        let username = AuthenticationService.getLoggedLoggedInUserName()
        // console.log(id + " " + username)
        TodoDataService.deleteTodos(username, id)
            .then(
                response => {
                    this.setState({message: `Delete of todo ${id} successful`});
                    this.refreshTodos()
                }
            )
    }

    updateTodoClicked(id) {
        console.log('update' + id)
        this.props.history.push(`todos/${id}`)
        // let username = AuthenticationService.getLoggedLoggedInUserName()
        // // console.log(id + " " + username)
        // TodoDataService.deleteTodos(username, id)
        //     .then(
        //         response => {
        //             this.setState({message: `Delete of todo ${id} successful`});
        //             this.refreshTodos()
        //         }
        //     )
    }


    render() {
        return (
            <div>
                <h1>Todo List</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Description</th>
                            <th>Target Date</th>
                            <th>Is Completed?</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                                    < tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent;