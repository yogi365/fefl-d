import React from 'react';
import Header from './components/Header'
import ClassComponent from './components/ClassComponent';
import CounterClass from './components/CounterClass';

function App()
{
    // const p = React.createElement('p', null, "Somthing inside a paragraph");
    // const div = React.createElement('div', null, <Header />, p);

    // return div;

    // var name = <span>John</span>;
    // var age = 20;

    return (

        <>
            {/* <ClassComponent /> */}
            {/* <Header /> */}
            <CounterClass />
        </>
    )
}

// export default App;

export { App }