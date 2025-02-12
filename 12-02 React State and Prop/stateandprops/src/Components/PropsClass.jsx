import React from 'react'
export default class PropsClass extends React.Component
{
    render()
    {
        return (
            <>
                <h2>{this.props.name}</h2>
                <h4>{this.props.age}</h4>
                <ul>
                    {
                        this.props.marks.map(mark =>
                        {
                            return <li>{mark}</li>
                        })
                    }
                </ul>
                <p>{this.props.children}</p>
            </>
        )
    }
}