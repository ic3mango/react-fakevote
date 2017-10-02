import React from 'react';
import { Field } from 'redux-form';

const renderOption = ({ input, label, handleDelete, meta: { error, touched } }) => (
  <div className="row">
    <div className="col s12">
      {label}
      <div className="input-field inline">
        <input type="text" {...input} />
      </div>
      <button
        type="button"
        className="btn-floating red"
        onClick={handleDelete}>
        <i className="material-icons">delete</i>
      </button>
      {touched && error && <span className="red-text">{error}</span>}
    </div>
  </div>
);


export default ({ fields, meta: { error, submitFailed } }) => {
  return (
    <ul>
      {fields.map((option, index) => (
        <li key={index}>
          <Field
            name={option}
            label={`Option ${index+1}`}
            component={renderOption}
            handleDelete={() => fields.remove(index)}
          />
        </li>
      ))}
      <li>
        <button
          type="button"
          className="btn-flat orange white-text"
          onClick={() => fields.push()}
        >
          <i className="material-icons left">add</i>
          Option
        </button>
      </li>
    </ul>
  );
}
