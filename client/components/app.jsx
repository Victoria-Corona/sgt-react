import React from 'react';
import PageTitle from './header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    fetch('/api/grades', {
      method: 'GET'
    })
      .then(response => response.json()).then(data => {
        this.setState({ grades: data });
      })
      .catch(error => {
        console.error(error.message);
      });
  }

  render() {
    return (
      <PageTitle text="Student Grade Table"/>
    );
  }

}

export default App;
