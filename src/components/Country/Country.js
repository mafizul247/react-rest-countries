import React from 'react';
import './Country.css'
const Country = (props) => {
    // console.log(props.country);
    const {area, region, population, name, flags } = props.country;
    return (
        <div className='country bg-info'>
        <h3>Country Name: {name.common}</h3>
        <img src={flags.png} alt="" />
        <h5>Country Population: {population}</h5>
        <h5>Country Region: {region}</h5>
        <h5>Country Area: {area}</h5>
    </div>
        // <div className='country'>
        //     <h3>Country Name: {props.country.name.common}</h3>
        //     <h5>Country Population: {props.country.population}</h5>
        //     <h5>Country Region: {props.country.region}</h5>
        //     <h5>Country Area: {props.country.area}</h5>
        // </div>
        // <div className='country'>
        //     <h3>Country Name: {name.common}</h3>
        //     <h5>Country Population: {population}</h5>
        //     <h5>Country Region: {region}</h5>
        //     <h5>Country Area: {area}</h5>
        // </div>
    );
};

export default Country;