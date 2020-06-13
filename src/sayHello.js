import React from 'react';

const sayHello = () => {
    console.log("Hello!");
};

function Hello() {
    return(
        <div>
            <h3>Hello component</h3>
            <button onclick={sayHello}>Say Hello</button>
        </div>
    )
}

export default Hello;