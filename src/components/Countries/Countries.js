import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        try {
            fetch('https://restcountries.com/v3.1/all')
                .then(res => res.json())
                .then(data => setCountries(data))
        } catch (err) {
            console.log(err)
        }
    }, [])
    return (
        <div className=''>
            <h1>Welcome to Rest Countries: {countries.length}</h1>
            <div className="countries-container">
            {
                countries.map(country => <Country 
                    country={country}
                    key={country.cca3}></Country>)
            }
            </div>

            {/* {
            countries.map(country => <Country 
                name={country.name.common} 
                population={country.population} 
                area={country.area} 
                region={country.region}></Country>)
        } */}
            {/* {
            countries.map(country => <Country 
                country={country}></Country>)
        } */}
        </div>
    );
};

export default Countries;