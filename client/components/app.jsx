import React from 'react';
// import ReactDOM from 'react-dom';
import PageTitle from './header';
import GradeTable from './GradeTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      average: 0
    };
    this.getAverageGrade = this.getAverageGrade.bind(this);
  }

  componentDidMount() {
    fetch('/api/grades', {
      method: 'GET'
    })
      .then(response => response.json()).then(data => {
        this.setState({ grades: data });
        this.getAverageGrade();
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
    }
    results = Math.floor(sumOfGrades / arrayGrades.length);
    this.setState({ average: results });

  }

  render() {
    return (
      <>
        <PageTitle text="Student Grade Table" results={this.state.average}/>
        <GradeTable grades={this.state.grades}/>
      </>
    );
  }

}

export default App;
