import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

function Body() {
  let _description = null;

  return (
    <div>
      <h1>My To-Do List</h1>
      <label>Add an item:</label>
      <input
        type='text'
        description='description'
        ref={(input)=> {_description = input;}}/>
      <button type='submit'>Add</button>
    </div>
  );
}

Body.propTypes = {

}

export default connect()(Body);
