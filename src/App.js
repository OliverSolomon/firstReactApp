import React from 'react';
import Hello from './sayHello';
import Tweet from './students';
import './App.css';

function App() {
    const sayhello = () => {
        console.log('hello');

    }
    return (
        <div className='mainContainer'>
            <Hello/>
            <div className='tweetsContainer'>
                <Tweet/>
                <Tweet/>
                <Tweet/>
                <Tweet/>
                <Tweet/>
                <Tweet/>
            </div>
            {/* <h2>Hello React</h2>
            <button onClick={sayhello}>Hello React</button> */}
        </div>
    );
}

export default App;