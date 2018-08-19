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
    componentDidMount() {
        this.chirpResponse();
    }

    chirpResponse() {
        setTimeout(() => {
            this.setState((prevState) => {
                const newChirp = [
                    { from: 'bot', text: 'Chirp chirp chirp', time: Date.now() }
                ];
                return { chatLog: prevState.chatLog.concat(newChirp) };
            });
        }, 2000);
    }

    getInput(str) {
        const inputAndTime = { from: 'user', text: str, time: Date.now() };
        this.setState((prevState) => {
            this.chirpResponse();
            return { chatLog: prevState.chatLog.concat([inputAndTime]) };
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to Chirper</h1>
                </header>
                <Chirp chatLog={this.state.chatLog} />
                <Input getInput={this.getInput} />
            </div>
        );
    }
}

export default App;
