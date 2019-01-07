import React from 'react';

const EditExpense = (props) => (
  <div>
    Edit expenses for user with id {props.match.params.id}
  </div>
);

export default EditExpense;