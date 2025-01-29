import React from 'react';
import Header from './components/Header'


function App()
{
    // const p = React.createElement('p', null, "Somthing inside a paragraph");
    // const div = React.createElement('div', null, <Header />, p);

    // return div;

    // var name = <span>John</span>;
    // var age = 20;
    const users = [
        { name: "John Doe", email: "john@example.com", age: 25 },
        { name: "Jane Smith", email: "jane@example.com", age: 30 },
        { name: "Alice Johnson", email: "alice@example.com", age: 22 },
        { name: "Bob Brown", email: "bob@example.com", age: 28 },
        { name: "Charlie Davis", email: "charlie@example.com", age: 35 }
    ];
    return (
        // <div>

        //     <Header />
        //     {
        //         age < 19 ? <p>Anonymous</p> : <p>{name}</p>
        //     }
        //     <p>Somekind of comment</p>
        // </div>
        <>
            <Header />
            <ul>
                {
                    users.map(user =>
                    {
                        return <li>{user.name}</li>
                    })
                }
            </ul>
        </>
    )
}

// export default App;

export { App }