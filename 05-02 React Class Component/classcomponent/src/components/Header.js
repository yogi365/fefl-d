import React from 'react';
import TableRow from './TableRow';
import TableRowClass from './TableRowClass';
export default function Header()
{
    const users = [
        { name: "John Doe", email: "john@example.com", age: 25 },
        { name: "Jane Smith", email: "jane@example.com", age: 30 },
        { name: "Alice Johnson", email: "alice@example.com", age: 22 },
        { name: "Bob Brown", email: "bob@example.com", age: 28 },
        { name: "Charlie Davis", email: "charlie@example.com", age: 35 }
    ];

    return (
        <table>
            <tbody>
                {
                    users.map((user, index) =>
                    {
                        return (
                            <TableRowClass user={user} />
                        )

                    })
                }
            </tbody>
        </table>
    )
}

