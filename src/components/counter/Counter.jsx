import React, {Component} from 'react';
import './Counter.css'

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            secondCounter: 100
        }

        this.increment = this.increment.bind(this);
    }


    render() {
        //render = () => {
        // const style = {fontSize : "50px", padding : "15px 30px"};
        return (
            <div className="counter">
                <button onClick={this.increment}>+1</button>
                <span className="count"
                    // style={style}
                >{this.state.counter}</span>
            </div>
        )
    }

    increment() { //Update state - counter++
        // this.state.counter++; //Bad Practice
        this.setState({
            counter: this.state.counter + 1
        });
    }
}

export default Counter;