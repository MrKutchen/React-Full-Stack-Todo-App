import React, {Component} from 'react';

class LogoutComponent extends Component {
    render() {
        return (
            <div>
                <h1>You logged out</h1>
                <div className="container">
                    Thank you for using the Todo Application!
                </div>
            </div>
        )
    }
}

export default LogoutComponent;