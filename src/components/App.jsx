import React from 'react';
import Form from './Form';
import List from './List';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mastertoDoList: {
        '1': {
          chore: 'chore',
          description: 'homework',
          rating: 'rating',
          completed: false,
          id: '1'
        },
        '2': {
          chore: 'dishes',
          description: 'dishes',
          rating: 'rating',
          completed: false,
          id: '2'
        }
      }
    }
  }

  render() {
    return(
      <div>
        <Form/>
        <List toDoList = {this.state.mastertoDoList}/>
      </div>
    );

  }
}

App.propTypes = {
  mastertoDoList: PropTypes.Object
};
export default connect()(App);
