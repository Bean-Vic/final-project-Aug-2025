import React from 'react';

export class ControlledComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'bean',
        }
    }

    handleChange = (e) => {
        this.setState({ inputValue: e.target.value });
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
                <div>你的输入是：{this.state.inputValue}</div>
            </div>
        )
    }
}

export class UncontrolledComponent extends React.Component {
    constructor(props) {
        super(props);
        this.inputReference = React.createRef();
    }

    render() {
        return (
            <form >
                <input type="text" ref={this.inputReference} />
                <button type="submit">submit</button>
            </form>
        )
    }
}