import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.getInput(this.state.input);
        this.setState({ input: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.input}
                    onChange={this.handleChange}
                    placeholder="chirp chirp chirp"
                />
                <button type="submit">Send</button>
            </form>
        );
    }
}

export default Input;
