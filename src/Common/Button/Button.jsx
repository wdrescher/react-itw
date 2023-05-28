import {React} from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

function Button(props) {
    return <button class="button" onClick={props.buttonClick}>
        {props.buttonText}
    </button>
}

Button.propTypes = {
    buttonText: PropTypes.string.isRequired, 
    buttonClick: PropTypes.func
}

export default Button;