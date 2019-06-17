import * as React from 'react'

function Navbar(props) {
    return (
        <div className="navbar">
        <div>Pet all the Cats!</div>
        <div>Pet a cat to begin</div>
        <div>Pets: {props.score} | Most Cats Petted: {props.bestScore}</div>
        </div>
    );
}

export default Navbar;