import React from 'react';
import Hello from './sayHello';
import Tweet from './students';
import './App.css';

function App() {
    const sayhello = () => {
        console.log('hello');

    }
    // var names = ['oliver', 'jane', 'Saina', 'Brian', 'Keith', 'Local Man'];
    return (
        <div className='mainContainer'>
            <Hello/>
            <div className='tweetsContainer'>
                <Tweet name='Oliver' message = 'I am the greatest but still myopic Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero debitis harum voluptates!' />
                <Tweet name='Jane'message = 'To be or not to be is one of the hardest existential questions Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero debitis harum voluptates!'/>
                <Tweet name= 'saina' message = 'She loves me, She loves me not.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero debitis harum voluptates!'/>
                <Tweet name = 'Brian' message = "Doesn't it frigten you to find out that you dont know yourself too well ? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero debitis harum voluptates!"/>
                <Tweet name = 'Keith' message = "Baby, you're the best i ever had.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero debitis harum voluptates!"/>
                <Tweet name = 'Local Man' message = 'Local Man is scared stiff of politics. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero debitis harum voluptates!'/>
            </div>
            {/* <h2>Hello React</h2>
            <button onClick={sayhello}>Hello React</button> */}
        </div>
    );
}

export default App;