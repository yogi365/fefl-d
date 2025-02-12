import React, { Component } from 'react';

export default class TableRowClass extends Component
{
    render()
    {
        return (
            <tr>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.email}</td>
                <td>{this.props.user.age}</td>
            </tr>
        )
    }
}