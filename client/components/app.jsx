import React from 'react';
// import ReactDOM from 'react-dom';
import PageTitle from './header';
import GradeTable from './GradeTable';

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
        // console.log(this.state.grades);
      })
      .catch(error => {
        console.error(error.message);
      });
  }

  render() {
    return (
      <>
        <PageTitle text="Student Grade Table"/>
        <GradeTable grades={this.state.grades}/>
      </>
    );
  }

}

export default App;
