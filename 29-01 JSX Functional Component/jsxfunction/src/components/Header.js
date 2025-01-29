import React from 'react';
export default function Header()
{
    const h1 = React.createElement('H1', { style: { color: "red" }, id: "abc" }, "Hello, World")
    return h1;
}

