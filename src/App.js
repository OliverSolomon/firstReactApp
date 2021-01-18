import React from 'react';
import Hello from './sayHello';
import Tweet from './students';
import './App.css';

function App() {
    const sayhello = () => {
        console.log('hello');

    }
    return (
        <div>
            <Hello/>
            <Tweet/>
            <Tweet/>
            <Tweet/>
            <Tweet/>
            <Tweet/>
            {/* <h2>Hello React</h2>
            <button onClick={sayhello}>Hello React</button> */}
        </div>
    );
}

export default App;