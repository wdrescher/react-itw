import React from 'react';
import PropTypes from 'prop-types'

import Sandwich from '../../Sandwich/Sandwich';
import Button from '../../Common/Button/Button'

import './Splashboard-CTA.scss'

function SplashboardCTA(props) {
    return <div class="splashboard-cta">
        <Sandwich text={props.header}/>

        {props.subtext && 
            <div class="splashboard-cta__subtext">{props.subtext}</div>
        }
        
        {props.displayButton && 
            <Button buttonText={props.buttonText} 
                    buttonClick={props.buttonClick}
            />
        }
    </div>
}

SplashboardCTA.propTypes = {
    displayButton: PropTypes.bool, 
    header: PropTypes.string.isRequired,
    subtext: PropTypes.string, 
    buttonText: PropTypes.string,
    buttonClick: PropTypes.func
}

export default SplashboardCTA;