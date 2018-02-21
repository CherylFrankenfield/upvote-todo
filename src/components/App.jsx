import React from 'react';
import Form from './Form';
import List from './List';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component{
  constructor(props){
    super(props);
    console.log(props);
    }

  render() {
    return(
      <div>
        <Form/>
        <List/>
      </div>
    );

  }
}

const mapStateToProps = state => {
  return {
    mastertoDoList: state.mastertoDoList
  }
}

App.propTypes = {
  mastertoDoList: PropTypes.object
};
export default connect(mapStateToProps)(App);
