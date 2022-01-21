import React, { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';

const Home = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h1>Total Independent Countries: {countries.length}</h1>
            {
                countries.map(country => <Country country={country} ></Country>)
            }
        </div>
    );
};

export default Home;