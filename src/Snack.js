import React from 'react';
import { Link } from 'react-router-dom';

function Snack({ snack }) {
  return (
    <div>
      <h2>{snack}</h2>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default Snack;
