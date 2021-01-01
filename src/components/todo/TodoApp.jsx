import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import './Todo.css'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <Route path="/welcome/:name" component={WelcomeComponent}/>
                        <Route path="/todos" component={ListTodosComponent}/>
                        <Route component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent/>
                </Router>
            </div>
        )
    }
}

class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos:
                [
                    {id: 1, description: 'Learn React', done: false, targetDate: new Date()},
                    {id: 2, description: 'Full Stack Developer', done: false, targetDate: new Date()},
                    {id: 3, description: 'Work with Brother', done: false, targetDate: new Date()}
                ]
        }
    }

    render() {
        return <div>
            <h1>Todo List</h1>
            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>description</th>
                    <th>Is Completed?</th>
                    <th>Target Date</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.todos.map(
                        todo => < tr>
                            <td>{todo.id}</td>
                            <td>{todo.description}</td>
                            <td>{todo.done.toString()}</td>
                            <td>{todo.targetDate.toString()}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    }
}

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                Header <hr/>
            </div>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <hr/>Footer
            </div>
        )
    }
}


class WelcomeComponent extends Component {
    render() {
        return <div>
            Welcome {this.props.match.params.name}. Manage your todos <Link to="/todos">here</Link>.
        </div>
    }
}

function ErrorComponent() {
    return <div>Page does not exist!</div>
}

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    loginClicked() {
        if (this.state.username === 'Peter' && this.state.password === 'Kutchen') {
            this.props.history.push(`/welcome/${this.state.username}`)
        } else {
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed: true})
        }
    }

    render() {
        return (
            <div>
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Success</div>}
                User Name: <input type="text" name="username" value={this.state.username}
                                  onChange={this.handleChange}/>
                Password: <input type="password" name="password" value={this.state.password}
                                 onChange={this.handleChange}/>
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }

}

export default TodoApp;