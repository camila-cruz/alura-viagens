import React from 'react';
import PropTypes from 'prop-types';
import TextField from '../TextField';

export default function CPFField({ onChange, ...props }) {
  function validation(e) {
    // Confere se é um CPF ou não
    // eslint-disable-next-line no-console
    console.log(e.target.value);
  }

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <TextField onChange={(e) => validation(e)} {...props} />
  );
}

CPFField.propTypes = {
  onChange: PropTypes.func.isRequired,
};
