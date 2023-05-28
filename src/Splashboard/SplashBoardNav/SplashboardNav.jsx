import React from 'react'; 
import PropTypes from 'prop-types';

import "./SplashboardNav.scss"

function SplashboardNav (props) {
    console.log(props.pageList)
    
    return <div class="splashboard-nav">
        {props.pageList.map(elem => (
            <div class="splashboard-nav__item">{elem}</div>
        ))}
    </div>
}

SplashboardNav.propTypes = {
    pageList: PropTypes.arrayOf(PropTypes.string)
}

export default SplashboardNav