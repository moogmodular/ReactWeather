/**
 * Created by MKS on 23.02.2017.
 */
import React from 'react';
import {Link, IndexLink} from 'react-router'

var Nav = (props) => {
    return (
        <div>
            <h2>Nav Component</h2>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
            <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
        </div>
    );
};

module.exports = Nav;
