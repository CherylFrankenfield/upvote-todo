import React from 'react';
import {connect} from 'react-redux';

function Body() {
  return (
    <div>
      <p>Body works!</p>
    </div>
  );
}

export default connect()(Body);
