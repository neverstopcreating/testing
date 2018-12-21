import React, {Component} from 'react';


class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: props.initialValue,
        };
    }

    decreaseItem = () => {
        this.setState({clicks: this.state.clicks - 1});
    };

    incrementItem = () => {
        this.setState({clicks: this.state.clicks + 1});
    };

    render() {
        const clicks = this.state.clicks;

        return (
            <div>
                <button className="decrement" onClick={this.decreaseItem} disabled={clicks <= 0}>-</button>
                <h2>{clicks}</h2>
                <button className="increment" onClick={this.incrementItem} disabled={clicks >= 10}>+</button>
            </div>
        );
    }
}

export default Counter;