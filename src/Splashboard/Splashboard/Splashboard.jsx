import React from 'react';
import PropTypes from 'prop-types';

import "./Splashboard.scss";
import SplashBoardCTA from '../Splashboard-CTA/Splashboard-CTA'
import SplashboardNav from '../SplashBoardNav/SplashboardNav';

function Splashboard (props) {
    const navs = [
        "Fort Benning", 
        "Fort Jackson", 
        "Fort Sill",
        "Fort Leonard Wood"
    ]

    return <div class="splashboard">
        <div className={"splashboard__row" + (props.displayLeftMode ? '--left' : '')}>
            <div class="splashboard__cta">
                <SplashBoardCTA
                    displayButton={true}
                    header="Find Your Soldier"
                    subtext="Search By Unit Name or Select Your Installation"
                    buttonText="Search"
                    buttonClick={() => console.log("ALERT")}
                />
            </div>
        </div>
        
        <div class="splashboard__nav">
            <SplashboardNav pageList={navs} />
        </div>
    </div>
}

Splashboard.propTypes = {
    displayLeftMode: PropTypes.bool
}

export default Splashboard;