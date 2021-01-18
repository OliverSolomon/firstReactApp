import React from 'react';

function Hello() {
    const sayhello = () => {
        console.log('hello');
        var text = "SOme Sweet Text";
        alert(text);
    }
    return (
        <div>
            <h2>Hello React </h2>
            <button onClick={sayhello}>Hello React</button>
        </div>
    );
}

export default Hello;