import * as React from 'react'

function Navbar(props) {
    return (
        <div className="navbar">
        <div>Pet all the Cats!</div>
        <div>{props.userText}</div>
        <div>Pets: {props.score} | Most Cats Petted: {props.bestScore}</div>
        </div>
    );
}

export default Navbar;