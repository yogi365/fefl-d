import React from 'react'
import Button from './Button'
export default class StateClass extends React.Component
{
    state = {
        counter: 0,
        startFlag: false,
        laps: []
    }
    startCounter = () =>
    {
        if (!this.state.startFlag)
        {
            this.setState({ startFlag: true })

            this.interval = setInterval(() =>
            {
                this.setState((prevState) => ({ counter: prevState.counter + 1 }))
            }, 1000)
        }
    }

    stopCounter = () =>
    {
        clearInterval(this.interval);
        this.setState({ startFlag: false })
    }

    addLaps = () =>
    {
        this.setState((prevState) => ({ laps: [...prevState.laps, prevState.counter] }))
    }

    componentWillUnmount()
    {
        this.stopCounter();
    }

    shouldComponentUpdate(prevProps, prevState)
    {
        if (prevState.counter % 2 == 0)
        {
            return false;
        }

        return true;
    }

    render()
    {
        return (
            <>
                <h2>{this.state.counter}</h2>
                {/* <button onClick={this.startCounter}>Start</button> */}
                <Button name={this.state.counter} eventHandler={this.startCounter} />
                <button onClick={this.stopCounter}>Stop</button>
                <button onClick={this.addLaps}>Laps</button>
                <ul>
                    {
                        this.state.laps.map(lap =>
                        {
                            return <li>{lap}</li>
                        })
                    }
                </ul>
            </>
        )
    }
}