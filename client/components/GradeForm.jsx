import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const student = {
      name: this.state.name,
      course: this.state.course,
      grade: parseFloat(this.state.grade)
    };
    this.props.onSubmit(student);
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <form className="col-4" onSubmit={this.handleSubmit}>
        <div className="col-auto">
          <label className="sr-only" htmlFor="name">Student Name</label>
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-user"></i>
              </div>
            </div>
            <input type="text"
              value={this.state.name}
              name="name"
              className="form-control"
              placeholder="Student Name"
              onChange={this.handleChange}>
            </input>
          </div>
        </div>
        <div className="col-auto">
          <label className="sr-only" htmlFor="course">Student Course</label>
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-clipboard-list"></i>
              </div>
            </div>
            <input type="text"
              value={this.state.course}
              name="course"
              className="form-control"
              placeholder="Student Course"
              onChange={this.handleChange}>
            </input>
          </div>
        </div>
        <div className="col-auto">
          <label className="sr-only" htmlFor="grade">Student Grade</label>
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-graduation-cap"></i>
              </div>
            </div>
            <input type="text"
              value={this.state.grade}
              name="grade"
              className="form-control"
              placeholder="Student Grade"
              onChange={this.handleChange}>
            </input>
          </div>
        </div>
        <div className="form-action">
          <button type="submit" className="btn btn-success">Add</button>
          <button type="reset" className="btn btn-dark">Cancel</button>
        </div>
      </form>
    );
  }
}

export default GradeForm;
