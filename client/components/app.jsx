import React from 'react';
// import ReactDOM from 'react-dom';
import PageTitle from './Header';
import GradeTable from './GradeTable';
import GradeForm from './GradeForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAverageGrade = this.getAverageGrade.bind(this);
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

  addGrade(newGrade) {
    fetch('api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGrade)
    })
      .then(response => response.json())
      .then(data => {
      /* eslint-disable no-console */
        // console.log;
      })
      .catch(error => {
        console.error(error.message);
      });
  }

  getAverageGrade(grades) {
    const arrayGrades = this.state.grades;
    let sumOfGrades = 0;
    let results = null;

    for (let indexGrade = 0; indexGrade < arrayGrades.length; indexGrade++) {
      sumOfGrades += arrayGrades[indexGrade].grade;
      results = Math.floor(sumOfGrades / arrayGrades.length);
    }

    if (arrayGrades.length === 0) {
      results = 'N/A';
    }

    return results;
  }

  render() {
    const average = this.getAverageGrade();
    return (
      <>
        <PageTitle text="Student Grade Table" results={average}/>
        <GradeTable grades={this.state.grades}/>
        <GradeForm onSubmit= {this.addGrade}/>
      </>
    );
  }

}

export default App;
