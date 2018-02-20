import React from 'react';
import Body from './Body';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mastertoDoList: {},
      selectedItem: null
    }
  };


  render(){
    return(
      <div>
        <Body/>
      </div>
    );
  };
};

export default App;
