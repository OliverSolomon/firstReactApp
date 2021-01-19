import React from 'react';

function Hello() {
    const sayhello = () => {
        console.log('hello');
        var text = "SOme Sweet Text";
        alert(text);
    }
    return (
        <div >
            <h2 className="hello">Hello React </h2>
            <button onClick={sayhello} className = 'cta'>Hello React</button>
        </div>
    );
}

export default Hello;