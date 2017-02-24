/**
 * Created by MKS on 23.02.2017.
 */
import React from 'react';
import Nav from './Nav'
//import Weather from './Weather'

var Main = (props) => {
    return (
        <div>
            <Nav/>
            <h2>Main Component</h2>
            {props.children}
        </div>
    );
};

module.exports = Main;