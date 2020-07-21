import React from 'react';

function Grade(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.course}</td>
      <td>{props.grade}</td>
      <td><button onClick={() => props.onClick(props.id)} className="btn btn-danger">Delete</button></td>
    </tr>
  );
}

function GradeTable(props) {
  return (
    <div className="col-8">
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Student Name</th>
            <th>Course</th>
            <th>Grade</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {
            props.grades.map(grade => {
              return <Grade key={grade.name}
                name={grade.name}
                course={grade.course}
                grade={grade.grade}
                id={grade.id}
                onClick={props.onClick}
              />;
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default GradeTable;
