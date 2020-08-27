import React from 'react';

function DisplaySimpson({ simpson }) {
    return (
        <div className="DisplaySimpson">
            <img
                src={ simpson.image }
                alt={ simpson.character }
            />

            <div>
                <h4>Name: { simpson.character }</h4>
                <p>Quote: { simpson.quote }</p>
            </div>
        </div>
    );
}

export default DisplaySimpson;