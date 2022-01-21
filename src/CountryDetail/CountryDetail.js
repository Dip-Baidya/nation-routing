import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const CountryDetail = () => {
    const { countryName } = useParams();
    const [countryDetails, setCountryDetail] = useState([])
    useEffect(() => {
        console.log()
        const url = `https://restcountries.com/v3.1/name/${countryName}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCountryDetail(data.slice(1,2)))
    }, [])
    // console.log(countryDetails[1]);
    // console.log(countryDetails[0].altSpellings[0])
    return (
        <div >
            <h1>This {countryName} Detail</h1>
            {
                countryDetails.map(country => {
                    return (
                        <div style={{border: '1px solid purple'}}>
                            <h1>Name:{country.name.common}</h1>
                            <h2>Area:{country.area}</h2>
                            <h3>Population:{country.population}</h3>
                        </div>
                    )
                })

            }

        </div >
    );
};

export default CountryDetail;