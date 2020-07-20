import React from 'react';
// import GradeForm from './GradeForm';

function Grade(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.course}</td>
      <td>{props.grade}</td>
    </tr>
  );
}

function GradeTable(props) {
  return (
    <div className="row">
      <div className="col-8">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Student Name</th>
              <th>Course</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {
              props.grades.map(grade => {
                return <Grade key={grade.name}
                  name={grade.name}
                  course={grade.course}
                  grade={grade.grade}
                />;
              })
            }
          </tbody>
        </table>
      </div>
      {/* <form className="col-4" onSubmit={handleSubmit}>
        <div className="col-auto">
          <label className="sr-only" htmlFor="name">Student Name</label>
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-user"></i>
              </div>
            </div>
            <input type="text" className="form-control" name="name" id="name"
              placeholder="Student Name">
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
            <input type="text" className="form-control" name="course" id="course"
              placeholder="Student Course">
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
            <input type="text" className="form-control" name="grade" id="grade"
              placeholder="Student Grade">
            </input>
          </div>
        </div>
        <div className="form-action">
          <button type="submit" className="btn btn-success">Add</button>
          <button type="reset" className="btn btn-dark">Cancel</button>
        </div>
      </form> */}
    </div>
  );
}

export default GradeTable;
