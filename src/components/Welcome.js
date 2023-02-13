import React from 'react';
import PropTypes from "prop-types";

/**
 * React Component's welcome
 * @param {Object} userInfos
 * @returns Element for welcome message
*/
const Welcome = (props) => {
   
  
    return (
        <div className='welcome'>
            <h1 className='welcome-title'> Bonjour, <span className='welcome-name'>{props.userInfos?.firstName}</span></h1>
            <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
        </div>
    );
};





Welcome.propTypes = {
    userInfos: PropTypes.shape({
      age: PropTypes.number,
      firstName: PropTypes.string,
      lastname: PropTypes.string,
    }),
  };

export default Welcome;