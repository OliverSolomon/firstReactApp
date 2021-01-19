import React from 'react';

function Tweet() {
    
    var name = "Oliver";
    var date = "23/12/2001";
    var content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero debitis harum voluptates!";
    return ( 
        <div className="Tweets">
            <div className="tweet">
                <div className="headTweet">
                    <div className="Author"> {name} </div>
                    <div className="Date">{date}</div>
                </div>
                <div className="content">{content}</div>
            </div>
        </div>
    );

}

export default Tweet;