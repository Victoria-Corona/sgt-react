import React from 'react';

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

  );
}

export default GradeTable;
