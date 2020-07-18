import React from 'react';

function PageTitle(props) {
  return (
    <>
      <h1>{props.text}</h1>
      <h2>{props.results}</h2>
    </>
  );
}

export default PageTitle;
