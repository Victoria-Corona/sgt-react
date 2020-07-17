import React from 'react';
import PageTitle from './header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  render() {
    return (
      <PageTitle text="Student Grade Table"/>
    );
  }
}

export default App;
