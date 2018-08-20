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
        this.chirpResponse(200);
        this.chirpResponse(400);
        this.chirpResponse(600);
    }

    getRandomTime() {
        return Math.random() * 2000 + 100;
    }

    chirpResponse(time) {
        setTimeout(() => {
            this.setState((prevState) => {
                const newChirp = [
                    { from: 'bot', text: 'Chirp', time: Date.now() }
                ];
                return { chatLog: prevState.chatLog.concat(newChirp) };
            });
        }, time);
    }

    getInput(str) {
        const inputAndTime = { from: 'user', text: str, time: Date.now() };
        this.setState((prevState) => {
            this.chirpResponse(this.getRandomTime());
            return { chatLog: prevState.chatLog.concat([inputAndTime]) };
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to Chirper</h1>
                </header>
                <div className="chirp">
                    <Chirp chatLog={this.state.chatLog} />
                </div>
                <Input getInput={this.getInput} />
            </div>
        );
    }
}

export default App;
