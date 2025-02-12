import React, { Component } from 'react'

export default class CounterClass extends Component
{

    constructor()
    {
        super();
        this.state = {
            count: 5
        }
    }

    counter = () =>
    {
        console.log("Calling counter");
        this.setState({ count: this.state.count + 1 });
    }

    render()
    {
        // console.log(this.state)
        return (
            <>
                <h3>{this.state.count}</h3>
                <button onClick={this.counter}>Counter</button>
            </>
        )
    }
}