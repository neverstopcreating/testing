import React, {Component} from 'react';

import './App.css';
import Counter from "./Counter";


class App extends Component {

    render() {
        return (
            <div>
                <Counter initialValue={5}/>
            </div>
        );
    }
}

export default App;