import React from 'react';

function Details() {
    const stuff = () =>{
        const name = "dave";
        var username = "Dave124";
        var passwd = "My_password_for_class";
    
        Student1 = `I am ${name} and referred to as ${username} and my password is ${passwd}`;
        alert(Student1);
    }

    return ( 
        <div>
            {/* <h3>{Student1}</h3> */}
            <h3> Student1 </h3>
            <button onClick= {stuff}> Hidden Text </button>
        </div>
    );
}

export default Details;