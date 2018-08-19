import React, { Component } from 'react';
import Chirp from './Chirp';
import Input from './Input';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatLog: []
        };
        this.getInput = this.getInput.bind(this);
    }

    getInput(str) {
        console.log(str);
        const inputAndTime = { from: 'user', text: str, time: Date.now() };
        this.setState((prevState) => {
            return { chatLog: prevState.chatLog.concat([inputAndTime]) };
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to Chirper</h1>
                </header>
                <Chirp />
                <Input getInput={this.getInput} />
            </div>
        );
    }
}

export default App;
