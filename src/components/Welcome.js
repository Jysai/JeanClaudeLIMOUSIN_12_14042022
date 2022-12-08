import React from 'react';
import PropTypes from "prop-types";

const Welcome = (props) => {
    
    
    return (
        <div className='welcome'>
            <h1 className='welcome-title'> Bonjour, <span className='welcome-name'>{props.userInfos?.firstName}</span></h1>
            <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
        </div>
    );
};


// Welcome.propTypes = {
//     props: PropTypes.object,
//     userInfos: PropTypes.object,
//     firstName: PropTypes.string,
// };

export default Welcome;