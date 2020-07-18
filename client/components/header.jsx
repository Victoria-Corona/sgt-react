import React from 'react';

function PageTitle(props) {
  return (

    <div className="row">
      <div className="col-8">
        <h1>{props.text}</h1>
      </div>
      <div className="col-4">
        <h3>Average Grade<span className="badge badge-secondary">{props.results}</span></h3>
      </div>
    </div>
  );
}

export default PageTitle;
