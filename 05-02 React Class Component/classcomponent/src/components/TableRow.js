import React from 'react'
export default function TableRow(props)
{

    return (
        <tr>
            <td>{props.obj.name}</td>
            <td>{props.obj.email}</td>
            <td>{props.obj.age}</td>
        </tr>
    )
}