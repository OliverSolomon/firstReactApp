import React from 'react';
import Hello from './sayHello';

function App() {
    const sayhello = () => {
        console.log('hello');

    }
    return (
        <div>
            <Hello/>
            {/* <h2>Hello React</h2>
            <button onClick={sayhello}>Hello React</button> */}
        </div>
    );
}

export default App;