import React from 'react';
import Form from './Form';
import List from './List';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component{

  render() {
    return(
      <div>
        <Form/>
        <List toDoList={this.props.mastertoDoList}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mastertoDoList: state
  };
};

App.propTypes = {
  mastertoDoList: PropTypes.object
};
export default connect(mapStateToProps)(App);
