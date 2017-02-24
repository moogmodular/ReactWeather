/**
 * Created by MKS on 23.02.2017.
 */
import React from 'react';

var WeatherMessage = (props) => {
    return (
        <h3>It is {props.temp} in {props.location}</h3>
    );
};

module.exports = WeatherMessage;