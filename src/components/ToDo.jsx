import React from 'react';
import PropTypes from 'prop-types';

function ToDo(props){
  console.log(props);
  return(
    <div>
      <h3>{props.description}</h3>
    </div>
  )
}

ToDo.propTypes = {
  description: PropTypes.string
};

export default ToDo;
