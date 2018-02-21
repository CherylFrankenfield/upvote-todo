import React from 'react';
import ToDo from './ToDo';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

function List(props){
  console.log(props);
  return(
    <div>
      <h1>To Do:</h1>
        {Object.keys(props.toDoList).map(function(id) {
          var toDo = props.toDoList[id];
          console.log(toDo);
          return <ToDo description={toDo.description}
            key={id}
            id={id}/>
        })}
    </div>
  );
}

List.propTypes = {
  toDoList: PropTypes.Object
};

export default connect()(List);
