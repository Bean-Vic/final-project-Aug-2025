import React from 'react';


export class StateExample extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.setState({ counter: 5 });
    }

    handleClick() {
        const currentCounter = this.state.counter;
        this.setState({ counter: currentCounter + 1 });
    }

    render() {
        // let counter = this.state.counter;
        return (
            <div>
                <div>StateExample: {this.state.counter}</div>
                <button onClick={this.handleClick}>增加</button>
            </div>
        )
    }
}





export class HelloWorld1 extends React.Component { // 导出 - 类 - 类的名字叫HelloWorld (具名导出)


    render() {
        return (
            <div>Hello world1</div>
        )
    }
}

export class HelloWorld2 extends React.Component {
    componentDidMount() {
        console.log('componentDidMount生命周期函数执行成功');
    }

    render() {
        let variable = 0;
        variable = 'bean' + 'zoey';
        console.log(variable);
        return (
            <div>Hello world2</div>
        )
    }
}

export default HelloWorld2;