import React from 'react';
import PropTypes from 'prop-types';
import "./Sandwich.scss"

function Sandwich(props) {
    return <div class="sandwich">
        <div class="sandwich__heading">
            {props.text}
        </div>
    </div>
}

Sandwich.propTypes = {
    text: PropTypes.string.isRequired
}

export default Sandwich