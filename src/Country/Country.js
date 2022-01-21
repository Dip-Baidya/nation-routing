import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {

    const countryStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px',
    }

    return (
        <div style={countryStyle}>
            <h1>Name:{props.country.name.common}</h1>
            <h2>Area:{props.country.area}</h2>
            <h3>Population:{props.country.population}</h3>
            <Link to={`/country/${props.country.name.common}`}><button>I am a LINK option</button></Link>
            <br />
            <button>I am onClick option</button>
        </div>
    );
};

export default Country;