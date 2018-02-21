import React from 'react';
import {connect} from 'react-redux';
import { v4 } from 'uuid';

function Form(props) {
  let _description = null;
  function handleAddingTodo() {
    const {dispatch} = props;
    const action = {
      type: 'ADD_ITEM',
      chore: 'chore',
      description: _description.value,
      rating: 'rating',
      completed: false,
      id: v4()
    };
    dispatch(action);
    console.log(action);
  }

  return (
    <div>
      <h1>My To-Do List</h1>
      <label>Add an item:</label>
      <input
        type='text'
        description='tex'
        ref={(input)=> {_description = input;}}/>
      <button onClick={handleAddingTodo}>Add</button>
    </div>


  );
}


export default connect()(Form);
