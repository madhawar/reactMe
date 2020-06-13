import React from 'react';

function Tweet(props) {
    return(
        <div className="app">
            <h3>{props.name}</h3>
            <p>{props.message}</p>
            <h3>Number of likes</h3>
        </div>
    );
}

export default Tweet;