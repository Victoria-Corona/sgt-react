import React from 'react';
import PageTitle from './Header';
import GradeTable from './GradeTable';
import GradeForm from './GradeForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.deleteGrade = this.deleteGrade.bind(this);
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.addGrade = this.addGrade.bind(this);

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
      .then(res => res.json())
      .then(data => {
        this.setState({ grades: this.state.grades.concat(data) });
      })
      .catch(error => {
        console.error(error.message);
      });
  }

  deleteGrade(deletedGrade) {
    const array = this.state.grades;
    let index = null;

    for (let i = 0; i < array.length; i++) {
      if (array[i].id === deletedGrade) {
        index = i;
      }
    }

    fetch(`api/grades/${deletedGrade}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {

        array.splice(index, 1);
        this.setState({ grades: array });

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
        <div className="row">
          <GradeTable grades={this.state.grades} onClick={this.deleteGrade}/>
          <GradeForm onSubmit={this.addGrade}/>
        </div>

      </>
    );
  }

}

export default App;
